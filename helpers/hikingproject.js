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
    console.log(res.data.trails, "here is what I got back")
    callback(null,res.data.trails)
  }).catch((error)=> {
    console.log (error);
  })
};

module.exports.getHikingTrailsByArea = getHikingTrailsByArea;

//export to the server


// console.log("im in GetHiking lat ", lat, "lon ", lon)
// let options = {
//   url: `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&maxResults=20&key="200276336-d3949787208b38aef3cc0a919ef43c7a"`
// };

// request(options, function(err, res, body) {
// if(err) {
//   return callback(err, null);
// } else {
//   console.log("here is my data!", body)
//   callback(null,body);
// }
// });

// $.ajax({
//   type: 'GET',
//   url: 'https://www.hikingproject.com/data/get-trails',
//   data: {
//     key: "200276336-d3949787208b38aef3cc0a919ef43c7a",
//     lat: lat,
//     lon: lon,
//     maxDistance: 100,
//     maxResults: 20
//   },
//   dataType: "application/json",
//   success: function(body) {
//     console.log(body, "here is the body");
//   },
//   error: function() {
//     console.log("error!")
//   }
// })
