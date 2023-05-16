const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')

const mongoConnect=require('./model/database').mongoConnect
// const User=require('./model/user')
// const expense=require('./model/expense')
// const Order=require('./model/order')
// const Forgotpassword=require('./model/forgetpassword')
// // var bcrypt = require('bcryptjs');
// const download_tb=require('./model/File_download')
// const userRoute=require('./routes/user')
// const forgetpasswordRoute=require('./routes/forgetpassword')
// var jwt=require('jsonwebtoken')
require("dotenv").config()
const helmet=require('helmet')
const morgan=require('morgan')
const fs=require('fs')
const accessLog=fs.createWriteStream('access.log',{flags:'a'})

const app=ex()
app.use(helmet())
app.use(morgan('combined',{stream:accessLog}))
app.use(cors())
app.use(bodyparse.json({extended:false}))


// app.use('/',userRoute)
// app.use('/password',forgetpasswordRoute)

mongoConnect(()=>{
    // console.log(clent)
    app.listen(process.env.PORT)
})
// User.hasMany(expense)
// expense.belongsTo(User)

// User.hasMany(Order)
// Order.belongsTo(User)

// User.hasMany(Forgotpassword);
// Forgotpassword.belongsTo(User);

// User.hasMany(download_tb);
// download_tb.belongsTo(User);
// // sequelize.sync()
//     .then(() => {
//         app.listen(3000);
//     })
//     .catch(err => {
//         console.log(err);
//     })
