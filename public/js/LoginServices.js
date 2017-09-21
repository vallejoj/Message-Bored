angular.module('myApp')
.service('LoginService', ['$http', 
function($http) {
    return {
      loginUser: function(data) {
          return $http.get('/api/users' + data)
          .then(users => {
              if(user !== null){
                  localStorage.setItem('username', user.data.username)
              }
          })
      }
    } 
}]);