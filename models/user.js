const Sequelize=require('sequelize')
const sequilize=require('./database.js')
const User=sequilize.define('user',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    name:Sequelize.STRING,
    email:{type:Sequelize.STRING,unique:true,allowNull:false},
    phone: {
        type: Sequelize.STRING(10),
        validate: {
          len: [0, 10]
        }
      },
    password:Sequelize.STRING
    
})


sequilize.sync(); 
module.exports=User
