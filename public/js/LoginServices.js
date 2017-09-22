angular.module('myApp')
.service('LoginService', ['$http', 
function($http) {
    return {
      loginUser: function(data) {
          console.log("data", data)
          return $http.get('/api/users' + data)
          .then(user => {
              if(user !== null){
                console.log("look at these users,", user)
                  localStorage.setItem('username', user.data.username)

              }
          })
      }
    } 
}]);