const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')
// var bcrypt = require('bcryptjs');

const userRoute=require('./routes/user')
const forgetpasswordRoute=require('./routes/forgetpassword')
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


app.use('/',userRoute)
app.use('/password',forgetpasswordRoute)

app.listen(process.env.PORT)