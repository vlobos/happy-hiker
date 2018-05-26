const express = require('express');
const parser = require('body-parser');
const path = require('path');
const helpers = require('../helpers/hikingproject.js');
const request = require('request');
const axios = require('axios');

const app = express();

let PORT = 3000;

//middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//serve static
app.use(express.static(path.join(__dirname, '../client/dist')));

//set routes
app.get('/trails', function(req, res) {
  console.log('here in server/trails get request!')
  helpers.getHikingTrailsByArea(req.query.lat, req.query.lon, function(err, trailsData){
    if (err){
      console.log("error in /trails app.get", err);
      res.status(400);
    } else {
      //const listOfTrails = JSON.parse(trailsData);
      res.status(200).send(trailsData)
    }
  })
});

//set routes to /reviews
//app.post('/reviews', function(req, res))
//app.get('/reviews', function(req, res))

app.listen(PORT, function() {
  console.log('Listening to Port: ', PORT);
});
