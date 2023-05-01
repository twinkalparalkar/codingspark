const ex=require('express')
const bodyparse=require('body-parser')
const cors=require('cors')
const User=require('./model/user')
const expense=require('./model/expense')
const Order=require('./model/order')
const Forgotpassword=require('./model/forgetpassword')
// var bcrypt = require('bcryptjs');
const download_tb=require('./model/File_download')
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

// function generate(id,pre){
//     return jwt.sign({userId:id,preminum:pre},process.env.TOKEN_SECRET)
// }

// app.post('/user/signup',(req,res,next)=>{
//     try{
//         const a=req.body.name
//     const b=req.body.email
//     const c=req.body.password
//     // console.log(req.body)
//     if(a== null || b==null|| c==null){
//         return res.status(400).json({err:"bad param"})
//     }
//     const saltround=10
//     bcrypt.hash(c,saltround,async (err,hash)=>{
//         await User.create({name:a,email:b,password:hash}).then(()=>{
//             res.status(201).json({message:"Succefully create new user"})
//         })
//     })
//     }catch(err){
//         if(res.status==405){
//             res.json({err:"duplicate email"})}
    
//             res.status(500).json({err:"check email,password(User already exists)"})
//             console.log(err)
//     }
// })

// app.post('/user/login1',async (req,res,next)=>{
//     try{
//         const b=req.body.email
//     const c=req.body.password
//     // console.log(req.body,c)
    
//     await User.findAll({where:{ email:b}}).then(user1=>{
//         if(user1.length>0){
//             bcrypt.compare(c,user1[0].password,(err,res1)=>{
//                 // console.log(err,res.status,res1,u[0].password,c)
//                 if(res1==true){
//                     return res.status(201).json({success:true, mes:"Successfully login",token:generate(user1[0].id,user1[0].ispreminum)})
//                 }else{
//                     return res.status(400).json({success:false,mes:"Wrong password"})
//                 }
//             })
//         }else{
//             return res.status(400).json({success:false,mes:"User not exists"})
//         }
//     })
   
//     }catch(err){
//         res.status(500).json({success:false,mes:err})
//         console.log(err)
//     }
    
// })



app.use('/',userRoute)
app.use('/password',forgetpasswordRoute)

User.hasMany(expense)
expense.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

User.hasMany(download_tb);
download_tb.belongsTo(User);
// sequelize.sync()
//     .then(() => {
//         app.listen(3000);
//     })
//     .catch(err => {
//         console.log(err);
//     })
app.listen(process.env.PORT)