const User=require('../models/user')
var bcrypt = require('bcryptjs');

const signup=async (req,res,next)=>{
    try{
        const a=req.body.username
    const b=req.body.email
    const c=req.body.password
    const d=req.body.phone
    // console.log(req.body)
    if(a== null || b==null|| c==null){
        return res.status(400).json({err:"bad param"})
    }
    const saltround=10
    bcrypt.hash(c,saltround,async (err,hash)=>{
        await User.create({name:a,email:b,password:hash,phone:d}).then(()=>{
            res.status(201).json({message:"Succefully create new user"})
        })
    })
    }catch(err){
        if(res.status==405){
            res.json({err:"duplicate email"})}
    
            res.status(500).json({err:"check email,password(User already exists)"})
            console.log(err)
    }
}



module.exports={
    signup
}
