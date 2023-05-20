const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const UserGroup = sequilize.define('UserGroup', 
{id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},

    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    groupId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'group',
        key: 'id'
      }
    },
    Isadmin:Sequelize.BOOLEAN
  });

sequilize.sync(); 
module.exports=UserGroup