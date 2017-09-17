angular.module('myApp')
.provider('Users', function() {
  this.users = [];



  this.$get = ['$http', function($http) {
    return {
      getUsers: function() {
        return $http.get('/api/users')
        .then((users) => {
          console.log(users);
          return users.data;
        });
      },
      addUsers: function(userData) {
        return $http.post('/api/users', userData )
        .then((users) => {
          console.log("users", users);
          return URLSearchParams.data;
        });
      }
    } 
  }]


  
});