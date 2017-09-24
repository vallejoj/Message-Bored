angular.module('myApp')
.service('TopicsService', ['$http' ,
function($http) {
  this.topics = [];
this.currentTopicId


   
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then((topics) => {
          console.log("what is this",topics);
          return topics.data;
        });
      },
      addTopics: function(topicData) {
        return $http.post('/api/topics', topicData )  
      },

      setTopicId: function(topicId){
        console.log("setTopicId", topicId)
      this.currentTopicId = topicId
    },
    
  
      getTopicId:function(){
        console.log('topicstate', this.currentTopicId  )    
          return this.currentTopicId
      }
    }  
}]);