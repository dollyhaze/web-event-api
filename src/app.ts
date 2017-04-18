import dotenv from 'dotenv';
let vars = dotenv.load().parsed;
import express from 'express';
import * as client from './helpers/eventful'
import mysql from 'mysql';
import cors from 'cors';

const app = express();
let poorMansCache = [];

var connection = mysql.createConnection({
  host     : vars.DB_HOST,
  user     : vars.DB_USER,
  password : vars.DB_PASS,
  database : vars.DB_DATABASE,
});

connection.connect();

app.use(cors())

app.get('/events', async function(req, res) {
  let response = []
  if(poorMansCache.length > 0) {
    response = poorMansCache
  } else {
    const res = await client.searchEvents({
      location: "Rotterdam, Netherlands",
      page_size: 100
    })
    response = poorMansCache = res.events
  }
  res.json({
    events: response,
  })
})

app.get('/parkings', async function(req, res) {
  connection.query('SELECT * FROM parking;', (err, response) => {
    if(err) console.log(err)
    res.json({
      parkings: response
    })
  })
});

app.listen(vars.SERVER_PORT, (err) => {
  if(err) {
    return console.log(err)
  }
  console.log('api listening on port: %s', vars.SERVER_PORT)
})
