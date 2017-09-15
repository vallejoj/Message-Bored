module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("Topic", {
  
      link: DataTypes.STRING,
        author: DataTypes.STRING,
      description: DataTypes.STRING
  
    }, {
      classMethods: {
        associate: function(models) {
        }
      }
    });
  
    return Topic;
  };
  