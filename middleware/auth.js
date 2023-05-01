
const jwt=require('jsonwebtoken')
const User =require('../model/user')
require("dotenv").config()

const authenticate=async (req,res,next)=>{
    try{
        const token=req.header('Authorization')
        const user=jwt.verify(token,process.env.TOKEN_SECRET)
        // console.log(user.userId,user.preminum)
        await User.findByPk(user.userId).then(user=>{
            req.user=user
            next()
        })
    }catch(err){
        console.log("lllll  ",err)
        return res.status(401).json({success:false})
    }
}
 
module.exports={
    authenticate}