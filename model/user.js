const Sequelize=require('sequelize')
const sequilize=require('./database.js')
const User=sequilize.define('user',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    name:Sequelize.STRING,
    email:{type:Sequelize.STRING,unique:true,allowNull:false},
    password:Sequelize.STRING,
    ispreminum:Sequelize.BOOLEAN,
    total:{type:Sequelize.INTEGER,
        defaultValue:0

    }
})


sequilize.sync(); 
module.exports=User
