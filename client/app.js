
var app = angular.module('bloggy', [
  'bloggy.home',
  'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'admin/signup.html',
      controller: 'HomeController'
    });
    // .when('/admin', {
    //   templateUrl: '../admin/signup.html',
    //   controller: 'LoginController'
    // })
    // .when('/', {
    //   templateUrl: 'pages/home.html',
    //   controller: 'HomeController'
    // })
});
