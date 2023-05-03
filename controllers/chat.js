
const Chat=require('../models/chat')
const chat= async (req, res, next) => {
    try {
        console.log(req.user.id)
      const mes = req.body.message;
      const ex=await Chat.create({message:mes,userId:req.user.id})
         
  
      return res.status(201).json({ message: "Successfully store" });
    } catch (err) {
      console.log(err)
  };
}


module.exports={
    chat
}
