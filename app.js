const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')
const User=require('./models/user')
const Chat=require('./models/chat')
// var bcrypt = require('bcryptjs');

const userRoute=require('./routes/user')

require("dotenv").config()

const app=ex()
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(bodyparse.json({extended:false}))

User.hasMany(Chat);
Chat.belongsTo(User);

app.use('/',userRoute)

app.listen(process.env.PORT)