// creation uses a 2nd array argument to import dependencies
angular.module('myApp', ['ngRoute']);

// retrieval has only one argument
angular.module('myApp')
// config
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider
    $routeProvider
    .when('/',{
        templateUrl: 'home.html',
        controller: 'myController'
    })
    .otherwise({
        template: '<h1><center>SUCK IT TREBEK</center></h1>'
      });
    $locationProvider.html5Mode(true);
}])

// run
.run(['APP_VERSION', '$rootScope', function(APP_VERSION, $rootScope) {
  $rootScope.version = APP_VERSION;
}]);