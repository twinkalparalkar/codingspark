// const Sequelize=require('sequelize')
// require("dotenv").config()
// const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,
//     { dialect:'mysql',
//     host:process.env.DB_HOST})
const mangodb=require('mongodb')
const Mongoclient=mangodb.MongoClient

let _db;
const mongoConnect= callback =>{
    Mongoclient.connect('mongodb+srv://twinkal:Yvn882J4qjPmFlc4@cluster1.dyv7csw.mongodb.net/shop?retryWrites=true&w=majority')
.then(client=>{
    console.log(client)
    _db=client.db()
    callback(client)
}).catch(err=>{
    console.log(err)
})

}

const getDb=()=>{
    if(_db){
        return _db
    }
    throw 'no db'
}


exports.mongoConnect=mongoConnect
exports.getDb=getDb