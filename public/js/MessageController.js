angular.module('myApp')


.controller('MessageController',
['$scope', 'Messages', function($scope, Messages) {
 
  $scope.messages= [];
  Messages.getMessages()
  .then((messages) => {
    $scope.messages = messages;
  })

  
  $scope.addMessages = function() {
    let newMessage ={
      body: $scope.tempMessage.body,
    };
    console.log('hey look',Messages)
    Messages.addMessages(newMessage)
  }

}]);
