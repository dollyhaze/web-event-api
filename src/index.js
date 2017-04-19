var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path 	= require('path');
var fs 		= require('fs');

var file = path.join(__dirname+'/public/data/data.json');
var events = [];
var len = 0;
var locations = [];
var descriptions = [];
var coordinates = [];
var limit = 1;
var pagecounter = 1; 
var itemcounter = 0;
var cnt;
var cnd = 0;

var options = {
  url: 'https://rotterdam.info/?controller=folder.Agenda&action=ajax&tag=50%2C33%2C23&page=1',
  headers: {
   'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16',
  }
};

function scrapeEvents(error, response, html) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(html);

    list = $(html).find('article');
    if (list != undefined) {
	    list.each(function(i, node) {
	    	itemcounter++;
		    let name = $(node).find('h3').text();
		    let dates = $(node).find('div[class="date-and-location"]').find('span');
		    let datestring = ''
		    let href = "https://rotterdam.info" + $(node).find('a[class="boxlink"]').attr('href');
		    dates.each(function(i, item) {
		    	if(i != dates.length - 1) {
		    		datestring += $(item).text();
		    	}
		    })
		    json = {id: itemcounter, title : name, description : "-", date : datestring, location : "-", latitude : "-", longitude : "-", url: href};
		    events.push(json);
		});
	}else {
		console.log('out of items');
		exit(1);
	}
  }else {
  	console.log(error);
  }
  len = events.length;
  cnt = 0;
  next();
}

function getCoords(error, response, html) {
	let coords = {
		lat: "",
		lng: ""
	}
	if (!error && response.statusCode == 200) {
		json = JSON.parse(html);
		for (var i = json['results'].length - 1; i >= 0; i--) {
			coords.lat = json['results'][i].geometry.location.lat;
			coords.lng = json['results'][i].geometry.location.lng;
		}
	}
	coordinates.push(coords);
	cnd++;
	if(cnd >= events.length) {
		console.log('getting coords');
		setCoords();
	}
}

function setCoords() {
	for (var i = events.length - 1; i >= 0; i--) {
		events[i].lat = coordinates[i].lat;
		events[i].lng = coordinates[i].lng;

	}
	console.log('setting coords');
	save2json();
}

function scrapeDetails(error, response, html) {
	console.log("scraping page "+pagecounter+" : "+ cnt / len * 100 + "%");
	if (!error && response.statusCode == 200) {
	    $ = cheerio.load(html);
	    let address = $('ul[class="address"]').children().first().text();
	    locations.push(address);
	    let desc = $('.intro').html();
	    descriptions.push(desc);
	}else {
  		console.log(error);
  	}
  	next();
}

function next() {
	if (cnt < 3) {
		var o = options;
		o.url = events[cnt].url;
		request(o, scrapeDetails);
		cnt++;
	}else {
		for (var i = events.length - 1; i >= 0; i--) {
			events[i].location = locations[i];
			events[i].desc = descriptions[i];
		}
		nextPage();
	}
}

function simpleStringify (object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
}

function clearFile() {
	fs.writeFile(file, "", function(err) {
		console.log("cleared db")
	});
}


function save2json() {
	let jsonstring;
	let size = fs.stat(file, function(err, stat) {
	  if(err) {}
	  return stat.size;    
	});
	if (size == undefined) {
		string = '{ "events": [';
		for (let i = events.length - 1; i >= 0; i--) {
			string += simpleStringify(events[i]);
			if (i != 0) {
				string += ",";
			}
			
		}
		
		string += "]}";

		fs.writeFile(file, string, function(err) {
			console.log("saved");
		});
	}else {
		fs.readFile(file, function (err, data) {
		    jsonstring = JSON.parse(data);
		    for (let i = events.length - 1; i >= 0; i--) {
				jsonstring.events.push(simpleStringify(events[i]));
				console.log(events[i]);
			}
		})
			fs.writeFile(file, jsonstring, function(err) {
				console.log("saved");
			});
	}
}

function nextPage() {
	if (pagecounter < limit) {
		pagecounter++;
		options.url = 'https://rotterdam.info/?controller=folder.Agenda&action=ajax&tag=50%2C33%2C23&page='+pagecounter;
		request(options, scrapeEvents);
	}
	for (var i = 0; i < events.length; i++) {
		o = options;
		o.url = "http://maps.google.com/maps/api/geocode/json?address="+events[i].location;
		request(o, getCoords);
	}
}

//filter functions
function getEventById(id) {
	var json = JSON.parse(require('fs').readFileSync(file, 'utf8'));
	return json.events.filter(function(item) {
		return item.id == id;
	})
}

function getEventByDate(month, day = null) {
	var json = JSON.parse(require('fs').readFileSync(file, 'utf8'));
	let list = [];
	json.events.filter(function(item) {
		if(item.date.includes(month)) {
			if(day != null) {
				if(item.date.includes(day)) {
					list.push(item);
				}
			}else {
				list.push(item);
			}
		}
	})
	return list;
}

function getEventByName(name) {
	var json = JSON.parse(require('fs').readFileSync(file, 'utf8'));
	let list = [];
	json.events.filter(function(item) {
		let n = item.location_name.toLowerCase();
		if(n.includes(name)) {
			list.push(item);
		}
	})
	return list;
}

function getEventByLocation(name) {
	var json = JSON.parse(require('fs').readFileSync(file, 'utf8'));
	let list = [];
	json.events.filter(function(item) {
		let n = item.location.toLowerCase();
		if(n.includes(name)) {
			list.push(item);
		}
	})
	return list;
}

//routing
app.get('/scrape', function(req, res) {
	clearFile();
	res.sendFile(path.join(__dirname+'/public/index.html'));
	request(options, scrapeEvents);
})

app.get('/events', function(req, res) {
	res.sendFile(file);
})

app.get('/events/:id', function(req, res) {
	res.send(getEventById(req.params.id));
})

app.get('/events/name/:name', function(req, res) {
	res.send(getEventByName(req.params.name));
})

app.get('/events/location/:location', function(req, res) {
	res.send(getEventByLocation(req.params.location));
})

app.get('/events/date/:month', function(req, res) {
	res.send(getEventByDate(req.params.month));
})

app.get('/events/date/:month/:day', function(req, res) {
	res.send(getEventByDate(req.params.month, req.params.day));
})

app.listen('8081')

console.log('listening on :8081')
