const User=require('../models/user')
var bcrypt = require('bcryptjs');
var jwt=require('jsonwebtoken')
require("dotenv").config()

function generate(id){
    return jwt.sign({userId:id},process.env.TOKEN_SECRET)
}

const login=async (req,res,next)=>{
  try{
      const b=req.body.email
  const c=req.body.password
  // console.log(req.body,c)
  
  await User.findAll({where:{ email:b}}).then(user1=>{
      if(user1.length>0){
          bcrypt.compare(c,user1[0].password,(err,res1)=>{
              // console.log(err,res.status,res1,u[0].password,c)
              
              if(res1==true){
                  return res.status(201).json({success:true, mes:"Successfully login",token:generate(user1[0].id)})
              }else{
                  return res.status(401).json({success:false,mes:"Wrong password"})
              }
          })
      }else{
          return res.status(400).json({success:false,mes:"User not exists"})
      }
  })
 
  }catch(err){
      res.status(500).json({success:false,mes:err})
      console.log(err)
  }
  
}

// const login=async (req,res,next)=>{
//   try{
//       const b=req.body.email
//   const c=req.body.password
//   // console.log(req.body,c)
  
//   await User.findAll({where:{ email:b}}).then(user1=>{
//       if(user1.length>0){
//           bcrypt.compare(c,user1[0].password,(err,res1)=>{
//               // console.log(err,res.status,res1,u[0].password,c)
//               if(res1==true){
//                   return res.status(201).json({success:true, mes:"Successfully login",token:generate(user1[0].id)})
//               }else{
//                   return res.status(400).json({success:false,mes:"Wrong password"})
//               }
//           })
//       }else{
//           return res.status(400).json({success:false,mes:"User not exists"})
//       }
//   })
 
//   }catch(err){
//       res.status(500).json({success:false,mes:err})
//       console.log(err)
//   }
  
// }

const signup = async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const password = req.body.password;
  
      console.log(req.body);
  
      if (!name || !email || !phone || !password) {
        return res.status(400).json({ error: "Bad parameters" });
      }
  
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
  
      await User.create({ name, email, phone, password: hash });
  
      return res.status(201).json({ message: "Successfully created new user" });
    } catch (err) {
      if (err.parent.code== "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "User already exists" });
      } else {
        // console.log("kkk",err,err.parent,err.parent.code)
        console.error(err,err.code);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  };



module.exports={
    signup,login
}
