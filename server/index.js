const express = require('express');
const parser = require('body-parser');

const app = express();

let PORT = 3000;

//middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//serve static
app.use(express.static(__dirname + './client/dist'));

//set routes
app.get('/trails', function() {
  console.log(' in trails get')
  }
);

app.post('/trails', function () {
  console.log (' in trails post')
  }
);


app.listen(PORT, function() {
  console.log('Listening to Port: ', PORT);
});
