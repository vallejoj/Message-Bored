angular.module('myApp')


.controller('UserController',
['$scope', 'UsersService', function($scope, UsersService) {
 
  $scope.users = [];
  UsersService.getUsers()
  .then((users) => {
    $scope.users = users;
  })

  
  $scope.addUsers = function() {
    let newUser ={
      name: $scope.tempUser.name,
    };
    
    console.log('hey look whooo',newUser)
    UsersService.addUsers(newUser)
    .then((users) => {
      console.log("handling promise and controller", users);
      
      $scope.users = users.data
    });
  }

}]);
