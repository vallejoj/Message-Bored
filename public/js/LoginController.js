angular.module('myApp')


.controller('LoginController',
['$scope', 'LoginService', function($scope, LoginService) {
 $scope.pendingUser = {'name': ''}
 $scope.LoginService = LoginService;

 $scope.loginUser = function() {
     let username = $scope.pendingUser.name;
     LoginService.loginUser(username);
     $scope.loggedIn = true;
     console.log('$scope.pendingUser.name',$scope.pendingUser.name)
     $scope.pendingUser.name = '';
 }
}]);
