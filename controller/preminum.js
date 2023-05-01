const User=require('../model/user')
const Order=require('../model/order')
const Razorpay=require('razorpay')
require("dotenv").config()
const sequelize = require('../model/database')
var jwt=require('jsonwebtoken')
function generate(id,pre){
    return jwt.sign({userId:id,preminum:pre},process.env.TOKEN_SECRET)
}


const preminum=async (req,res,next)=>{
    try{
        var rzp=await new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        })
        const amount=2500
        const r=rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
            if (err) {
                throw new Error(JSON.stringify(err))
            }
             req.user.createOrder({ orderid: order.id, status: "Pending" })
            res.status(201).json({ order, key_id: rzp.key_id })
        })
        
    }catch(err){
        res.status(403).json({message:"wrong something",error:err})
    }
}

const updatepayment=async (req,res,next)=>{
    const t=await sequelize.transaction()
    try{
        const userid=req.user.id
        const {payment_id,order_id}=req.body
       const order= await Order.findOne({where:{orderid:order_id},transaction:t})
       const p1=await order.update({paymentid:payment_id,status:'Successfully'},{transaction:t})
       const p2=await req.user.update({ispreminum:true},{transaction:t})
       await t.commit()
       Promise.all([p1,p2]).then(()=>{
        return res.status(202).json({sucess:true,message:"Transaction Successfully",token:generate(userid,true)})
       }).catch((error)=>{
        throw new Error(error)
       })
    }
    catch(err){
        await t.rollback()
        res.status(403).json({message:"wrong something",error:err})
    }
}
const showleader=async (req,res,next)=>{
    try{
        const l1=await User.findAll({
              order: [['total', 'DESC']]
            });
    // console.log("lll",l1)
    res.status(200).json({update1:l1})
    }
    catch(err){
        res.status(403).json({message:"wrong something",error:err})
    }
}
module.exports={
    preminum,updatepayment,showleader
}