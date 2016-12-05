
angular.module('bloggy.signup', ['bloggy.service'])
.controller('SignupController', function($scope, Auth) {
  //show all posts
  //option to logout
  //preview posts
  $scope.user = {};

  $scope.signupNew = function () {
    Auth.signup($scope.user);
  };

});