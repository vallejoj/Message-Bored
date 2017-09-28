angular.module('myApp')
.service('TopicsService', ['$http' ,
function($http) {
  this.topicss = [];
this.currentTopicId= [];
this.messages = [];


   
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then((topics) => {
         
          return topics.data;
        });
      },
      addTopics: function(topicData) {
        return $http.post('/api/topics', topicData )  
      },

      setTopicIdAndGetMessage : function(topicId){
        console.log("setTopicId", topicId)
        this.currentTopicId = topicId
        return $http.get('/api/messages/'+topicId)
        
        .then((messages) => {
          console.log('then messages',  messages)
          return messages.data;
        });
      },
  
      getTopicId:function(){
        console.log('service topicstate', this.currentTopicId  )    
          return this.currentTopicId
      },

    addMessages: function(messageData) {
      console.log('helllooooooo data', messageData)
    return $http.post('/api/messages', messageData )
  }
} 
    
}]);