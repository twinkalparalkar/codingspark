const Sequelize=require('sequelize')
const sequilize=require('./database.js')
const Group=sequilize.define('group',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    group_name:{type:Sequelize.STRING,unique:true,allowNull:false},
    admin_id:Sequelize.INTEGER
})


sequilize.sync(); 
module.exports=Group
