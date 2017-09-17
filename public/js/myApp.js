// creation uses a 2nd array argument to import dependencies
var myApp = angular.module('myApp', ['ngRoute']);

// retrieval has only one argument

// config
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider
    $routeProvider
    .when('/',{
        templateUrl: 'home.html',
        controller: ['UserController','MessageController']
    })
    .otherwise({
        template: '<h1><center>SUCK IT TREBEK</center></h1>'
      });
    $locationProvider.html5Mode(true);
}])


