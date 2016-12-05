
angular.module('bloggy.service', [])
.factory('Auth', function($http, $location, $window) {

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    signup: signup
  };
});