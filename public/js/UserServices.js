angular.module('myApp')
.service('UsersService', ['$http' ,
function($http) {
  this.users = [];



   
    return {
      getUsers: function() {
        return $http.get('/api/users')
        .then((users) => {
          console.log(users);
          return users.data;
        });
      },
      addUsers: function(userData) {
        console.log("services", userData)
        return $http.post('/api/users', userData )  
      }
    }  
}]);