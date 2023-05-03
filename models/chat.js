const Sequelize=require('sequelize')
const sequilize=require('./database.js')
const Chat=sequilize.define('chat',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    message:Sequelize.STRING
})


sequilize.sync(); 
module.exports=Chat
