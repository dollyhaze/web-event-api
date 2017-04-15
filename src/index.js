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
var limit = 8;
var pagecounter = 1; 
var itemcounter = 0;
var cnt;

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
		    json = {id: itemcounter, location_name : name, date : datestring,  location : "", url: href};
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

function scrapeDetails(error, response, html) {
	if (!error && response.statusCode == 200) {
	    $ = cheerio.load(html);
	    let address = $('ul[class="address"]').children().first().text();
	    locations.push(address);
	}else {
  		console.log(error);
  	}
  	console.log("scraping page "+pagecounter+" : "+ cnt / len * 100 + "%");
  	next();
}

function next() {
	if (cnt < events.length - 1) {
		var o = options;
		o.url = events[cnt].url;
		request(o, scrapeDetails);
		cnt++;
	}else {
		for (var i = events.length - 1; i >= 0; i--) {
			events[i].location = locations[i];
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
		jsonstring = '{ "events": [';
		for (let i = events.length - 1; i >= 0; i--) {
			jsonstring += simpleStringify(events[i]);
			if (i != 0) {
				jsonstring += ",";
			}
		}
		jsonstring += "]}";
	}else {
		fs.readFile(file, function (err, data) {
		    jsonstring = JSON.parse(data);
		    for (let i = events.length - 1; i >= 0; i--) {
				jsonstring.events.push(simpleStringify(events[i]));
			}
		})
	}
	fs.writeFile(file, jsonstring, function(err) {
		console.log("saved");
	});
}

function nextPage() {
	save2json();
	if (pagecounter < limit) {
		pagecounter++;
		options.url = 'https://rotterdam.info/?controller=folder.Agenda&action=ajax&tag=50%2C33%2C23&page='+pagecounter;
		request(options, scrapeEvents);
	}else {
		console.log('done scraping');
	}
}

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


app.get('/scrape', function(req, res){
	clearFile();
	res.sendFile(path.join(__dirname+'/public/index.html'));
	request(options, scrapeEvents);
})

app.get('/events', function(req, res){
	res.sendFile(file);
})

app.get('/events/:id', function(req, res){
	res.send(getEventById(req.params.id));
})

app.get('/events/date/:month', function(req, res){
	res.send(getEventByDate(req.params.month));
})

app.get('/events/date/:month/:day', function(req, res){
	res.send(getEventByDate(req.params.month, req.params.day));
})

app.listen('8081')

console.log('listening on :8081')