const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const Invite = sequilize.define('invite', 
{id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},

    userId: {
      type: Sequelize.INTEGER
    },
    groupId: {
      type: Sequelize.INTEGER
    }
  });

sequilize.sync(); 
module.exports=Invite