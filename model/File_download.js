const Sequelize=require('sequelize')
const sequilize=require('./database.js')
const download_tb=sequilize.define('download_tb',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    filename:Sequelize.STRING,
    fileURL:Sequelize.STRING,
    
})


sequilize.sync(); 
module.exports=download_tb