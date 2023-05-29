const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const cart = sequilize.define('cart', 
{id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},

    userId: {
      type: Sequelize.INTEGER
    },
    bookId: {
      type: Sequelize.INTEGER
    }
  });

sequilize.sync(); 
module.exports=cart