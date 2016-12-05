
var mongoose = require('mongoose');
var q = require('q');
var User = require('./userModel.js');

var findUser = q.nbind(User.findOne, User);
var createUser = q.nbind(User.create, User);

module.exports = {
  signup: function(request, response, next) {
    var username = request.body.username;
    var password = request.body.password;

    createUser({
      username: username,
      password: password
    }).then(function(response) {
      response.json(response);
    });
  }
};