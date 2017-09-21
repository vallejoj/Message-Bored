angular.module('myApp')


.controller('MessageController',
['$scope', 'MessagesService', function($scope, MessagesService) {
 
  $scope.messages= [];
  MessagesService.getMessages()
  .then((messages) => {
    $scope.messages = messages;
  })

  
  $scope.addMessages = function() {
    let newMessage ={
      body: $scope.tempMessage.body,
    };

    MessagesService.addMessages(newMessage)
    
    .then((messages) => {
      console.log("handling promise and controller", messages);
      
      $scope.messages = messages.data
    });
  }

}]);
