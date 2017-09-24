angular.module('myApp')


.controller('MessageController',
['$scope', 'MessagesService', 'TopicsService', function($scope, MessagesService, TopicsService) {
 
  $scope.messages= [];
  MessagesService.getMessages()
  .then((messages) => {
    $scope.messages = messages;
  })

  
  $scope.addMessages = function() {
    let newMessage ={
      body: $scope.tempMessage.body,
      topic_id: TopicsService.getTopicId(),
      author_id: localStorage.getItem('username')
    };

    MessagesService.addMessages(newMessage)
    .then((messages) => {
      console.log("handling promise and controller", messages);
      $scope.messages = messages.data
    });
  }

}]);
