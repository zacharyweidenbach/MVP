var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//Middleware
var middleware = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
};

mongoose.connect('mongodb://localhost/bloggy');

middleware(app, express);
// middleware(app, express);

// app.get('/', function(req, res) { res.send('hello world!') });

app.listen(3000);

module.exports = app;
