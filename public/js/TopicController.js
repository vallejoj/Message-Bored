angular.module('myApp')


.controller('TopicController',
['$scope', 'TopicsService', function($scope, TopicsService) {
 
  $scope.topics= [];
  $scope.messages  = [];
  $scope.tempTopicId;
  
  TopicsService.getTopics()
  .then((topics) => {
    $scope.topics = topics;
  })


  $scope.addTopics = function() {
    let newTopic ={
      name: $scope.tempTopic.name,
      created_by: localStorage.getItem('username')
    };

    TopicsService.addTopics(newTopic)
    .then((topics) => {
      console.log("da topics", topics.data);
      $scope.topics =[...$scope.topics, topics.data]
    });
  }

//this sets topic id and then gets messages. 
  $scope.setTopicIdAndGetMessage = function(topicState) {

    console.log("topicState:", topicState)
    $scope.tempTopicId = topicState
  
  
  TopicsService. setTopicIdAndGetMessage(topicState)
 
  .then((messages) => {
   
    $scope.messages = messages
   
    console.log("scope 2", $scope.messages)
    
  })
};

  $scope.addMessages = function() {
    let newMessage ={
      body: $scope.tempMessage.body,
      topic_id: 5,
      author_id: localStorage.getItem('username')
    };

    TopicsService.addMessages(newMessage)
    .then((messages) => {
      console.log("handling promise and controller",$scope.messages);
      $scope.messages = [...$scope.messages, messages.data]
      console.log("part 2", $scope.messages);
    });
  }

  

}]);
