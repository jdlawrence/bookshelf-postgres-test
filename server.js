var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log('object', req.body);
  res.send('data ' + JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});