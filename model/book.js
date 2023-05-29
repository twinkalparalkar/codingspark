const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const book=sequilize.define('book',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    amount:Sequelize.INTEGER,
    name:Sequelize.STRING,
    Image:Sequelize.STRING
})

sequilize.sync(); 

module.exports=book
