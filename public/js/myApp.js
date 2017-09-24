// creation uses a 2nd array argument to import dependencies
var myApp = angular.module('myApp', ['ngRoute']);

// retrieval has only one argument

// config
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider
    $routeProvider
    .when('/',{
        templateUrl: '../home.html',
        controller: 'LoginController'
    })
    .when('/post',{
        templateUrl: '../topic.html',
        controller: 'TopicController'
    })
    .when('/message',{
        templateUrl: '../message.html',
        controller: 'MessageController'
    })
    .when('/user',{
        templateUrl: '../user.html',
        controller: 'UserController'
    })
    .otherwise({
        template: '<h1><center>SUCK IT TREBEK</center></h1>'
      });
    $locationProvider.html5Mode(true);
}])


