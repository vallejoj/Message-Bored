angular.module('myApp')
.service('MessagesService', ['$http', 
function($http) {
  this.messages = [];

    return {
      getMessages: function(data) {
        return $http.get('/api/messages')
        .then((messages) => {
          return messages.data;
        });
      },
      addMessages: function(messageData) {
          console.log('helllooooooo data', messageData)
        return $http.post('/api/messages', messageData )
      
      }
    } 
}]);