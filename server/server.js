
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userController = require('./users/userController.js');



var app = express();

//Middleware
var middleware = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));
};

mongoose.connect('mongodb://localhost/bloggy');

middleware(app, express);
// middleware(app, express);

app.post('/api/users/signup', userController.signup);

// app.get('/', function(req, res) {
//   console.log('yo')
//   res.send('hello world!')

// });

app.listen(8000);

module.exports = app;


// var linksController = require('../links/linkController.js');
// var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware

// module.exports = function (app, express) {
//   app.get('/:code', linksController.navToLink);

//   app.post('/api/users/signin', userController.signin);
//   app.post('/api/users/signup', userController.signup);
//   app.get('/api/users/signedin', userController.checkAuth);

//   // authentication middleware used to decode token and made available on the request
//   // app.use('/api/links', helpers.decode);
//   app.get('/api/links/', linksController.allLinks);
//   app.post('/api/links/', linksController.newLink);

//   // If a request is sent somewhere other than the routes above,
//   // send it through our custom error handler
//   app.use(helpers.errorLogger);
//   app.use(helpers.errorHandler);
// };

