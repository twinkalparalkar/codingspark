const Sequelize=require('sequelize')
const sequilize=require('./database.js')

const Order=sequilize.define('order',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
    paymentid:Sequelize.STRING,
    orderid:Sequelize.STRING,
    status:Sequelize.STRING
})

sequilize.sync(); 

module.exports=Order