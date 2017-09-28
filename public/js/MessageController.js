angular.module('myApp')


.controller('MessageController',
['$scope', 'MessagesService', 'TopicsService', function($scope, MessagesService, TopicsService) {
 
  $scope.messages= [];
  $scope.topicID = TopicsService.getTopicId();

  // MessagesService.getMessages()
  // .then((messages) => {
  //   $scope.messages = messages;
  //   console.log($scope.messages,"yippeee")
  // })

  
  $scope.addMessages = function() {
    let newMessage ={
      body: $scope.tempMessage.body,
      topic_id: TopicsService.getTopicId(),
      author_id: localStorage.getItem('username')
    };

    MessagesService.addMessages(newMessage)
    .then((messages) => {
      console.log("handling promise and controller",$scope.messages);
      $scope.messages = [...$scope.messages, messages.data]
      console.log("part 2", $scope.messages);
    });
  }


}]);
