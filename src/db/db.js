var fs = require('fs');
var mysql = require('mysql');
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
let facilities = obj.parkingFacilities;
connection.connect();
connection.query(`CREATE TABLE IF NOT EXISTS parking (
id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(235) NOT NULL,
x VARCHAR(235),
y VARCHAR(235),
PRIMARY KEY (id) 
);`, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log(err);
});
facilities.forEach(function(item, i) {
	if(item.locationForDisplay) {
		let location = item.locationForDisplay;
		if(location.latitude && location.longitude){
			let x = location.latitude
			let y = location.longitude	
			let name = item.name;			
			let test  = {name, x, y};
			connection.query('INSERT INTO parking SET ?', test, function(err, rows, fields) {
			  if (!err)
				console.log('The solution is: ', rows);
			  else
				console.log(err);
			}); 			
		}

	}
})
/* connection.query(`DROP TABLE parking ;`, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log(err);
}); */
connection.end();