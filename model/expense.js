// const Sequelize=require('sequelize')
const getDb=require('./database.js').getDb

// const expense=sequilize.define('Expense',{
//     id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
//     expense1:Sequelize.INTEGER,
//     description:Sequelize.STRING,
//     category:Sequelize.STRING
// })

// sequilize.sync(); 
class Expense{
    constructor(expense1,description,category){
        this.expense1=expense1,
        this.description=description,
        this.category=category
    }
    save(){
        const db=getDb()
        db.collection('expense').insertOne(this).then(result=>{
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })

    }
}
module.exports=expense
