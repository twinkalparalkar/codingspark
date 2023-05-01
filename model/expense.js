const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const expense=sequilize.define('Expense',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    expense1:Sequelize.INTEGER,
    description:Sequelize.STRING,
    category:Sequelize.STRING
})

sequilize.sync(); 

module.exports=expense
