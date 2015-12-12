module.exports= function(sequelize, DataTypes){ 

return sequelize.define('Post', {nombre: DataTypes.STRING, 

   post: DataTypes.STRING

   });

}