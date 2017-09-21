angular.module('myApp')
.service('TopicsService', ['$http' ,
function($http) {
  this.topics = [];



   
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then((topics) => {
          console.log(topics);
          return topics.data;
        });
      },
      addTopics: function(topicData) {
        console.log("services", topicData)
        return $http.post('/api/topics', topicData )  
      }
    }  
}]);