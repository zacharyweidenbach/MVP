
//User Schema
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  var user = this;

  bcrypt.hash(user.password, null, null, function (error, hash) {
    if (error) {
      return next(error);
    }
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('users', UserSchema);