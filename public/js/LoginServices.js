angular.module('myApp')
.service('LoginService', ['$http', 
function($http) {
    return {
      loginUser: function(data) {
          console.log("data", data)
          return $http.get('/api/users/login/' + data)
          .then(user => {
              if(user !== null){
                  localStorage.setItem('username', user.data.username)
                  console.log("look at these users,", user)
              }
          })
      }
    } 
}]);