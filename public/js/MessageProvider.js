angular.module('myApp')
.provider('Messages', function() {
  this.messages = [];



  this.$get = ['$http', function($http) {
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
        .then((messages) => {
          console.log("messages", messages);
          return URLSearchParams.data;
        });
      }
    } 
  }]


  
});