angular.module('myApp')
.service('MessagesService', ['$http', 
function($http) {
  this.messages = [];

    return {
      getMessages: function() {
        return $http.get('/api/messages')
        .then((messages) => {
          console.log(messages);
          return messages.data;
        });
      },
      addMessages: function(messageData) {
          console.log('helllooooooo data', messageData)
        return $http.post('/api/messages', messageData )
      
      }
    } 
}]);