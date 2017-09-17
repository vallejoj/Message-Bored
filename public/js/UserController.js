angular.module('myApp')


.controller('UserController',
['$scope', 'Users', function($scope, Users) {
 
  $scope.users = [];
  Users.getUsers()
  .then((users) => {
    $scope.users = users;
  })

  
  $scope.addUsers = function() {
    let newUser ={
      name: $scope.tempUser.name,
    };
   
    console.log('hey look whooo',newUser)
    Users.addUsers(newUser)
  }

}]);
