angular.module('myApp')


.controller('TopicController',
['$scope', 'TopicsService', function($scope, TopicsService) {
 
  $scope.topics= [];
  $scope.topicsMessage= []
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


  $scope.setTopicId = function(topicState) {
    console.log("servicesss", topicState)
    TopicsService.setTopicId(topicState)
   
  };

}]);
