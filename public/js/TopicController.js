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
      name: $scope.tempTopic.name,
      createdBy: localStorage.username
    };

    
    TopicsService.addTopics(newTopic)
    
    .then((topics) => {
      console.log("handling promise and controller", topics);
      
      $scope.topics = topics.data
    });
  }

}]);
