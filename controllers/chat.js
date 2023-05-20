const Chat=require('../models/chat')
const User=require('../models/user')
const { Op } = require('sequelize');

const chat= async (req, res, next) => {
    try {
        console.log(req.user,req.query.groupid)
      const g=req.query.groupid ||0
      const mes = req.body.message;
      const ex=await Chat.create({message:mes,userId:req.user.id,groupId:g})
      //   socket.emit('message', 'Hello, server!');
//   socket.on('message', (data) => {
//     console.log('Received message from client:', data);
//     // Handle the message from the client
//   });
  
      return res.status(201).json({ message: "Successfully store" });
    } catch (err) {
      console.log(err)
  };
}

const display_chat = async (req, res, next) => {
    try {
      // console.log("hjj",req.query.lastid)
      const start=(req.query.lastid)||0

      const lastid=await Chat.max('id')
        // console.log('lpjjj',lastid)
        
      const data = await Chat.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where:{id:{[Op.gt]: start}}});
      // console.log("op")
      const updatedData = data.map((d) => {
        if (d.User) {
          return { ...d.toJSON(), username: d.User.name };
        } else {
          return { ...d.toJSON() };
        }
      });
      
      // console.log("ldf",updatedData)
      return res.status(200).json({ update: updatedData,current_userid:req.user.id,lastid:lastid });
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: err });
    }
  };
  

module.exports={
    chat,display_chat
}
