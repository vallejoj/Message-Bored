angular.module('myApp')


.controller('TopicController',
['$scope', 'TopicsService', function($scope, TopicsService) {
 
  $scope.topics= [];
  TopicsService.getTopics()
  .then((topics) => {
    $scope.topics = topics;
  })

  
  $scope.addTopics = function() {
    let newTopic ={
      body: $scope.tempTopic.body,
    };

    
    TopicsService.addTopics(newTopic)
    
    .then((topics) => {
      console.log("handling promise and controller", topics);
      
      $scope.topics = topics.data
    });
  }

}]);
