module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
  
      link: DataTypes.STRING,
        author: DataTypes.STRING,
      description: DataTypes.STRING
  
    }, {
      classMethods: {
        associate: function(models) {
        }
      }
    });
  
    return Message;
  };
  