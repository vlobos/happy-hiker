const request = require('request');
const axios = require('axios');

const getHikingTrailsByArea = (lat, lon, callback) => {
console.log('inside GHTBA', lat, lon)
  axios.get('https://www.hikingproject.com/data/get-trails', {
    params: {
      lat: lat,
      lon: lon,
      maxDistance: 100,
      maxResults: 20,
      key: "200276336-d3949787208b38aef3cc0a919ef43c7a"
    }
  }).then((res)=> {
    console.log("Get Request to HP API. Getting Data")
    callback(null,res.data.trails)
  }).catch((error)=> {
    console.log (error);
  })
};

module.exports.getHikingTrailsByArea = getHikingTrailsByArea;

//export to the server

