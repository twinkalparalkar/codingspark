const Group=require('../models/group')
const User=require('../models/user')
const Chat =require('../models/chat')
const UserGroup=require('../models/usergroup')
// const Invite=require('../models/invite')
const { Op } = require('sequelize');

const create_group= async (req, res, next) => {
    try {
        // console.log(req.user.id)
      const mes = req.body.group_name;   
      const user = await User.findByPk(req.user.id); // assuming you have the user ID
      const group = await Group.create({
        group_name: mes,
        admin_id: req.user.id
        });
      const r=await UserGroup.create({userId: req.user.id,groupId:group.id,Isadmin:true})
      return res.status(201).json({ message: "Successfully Created group" });
    } catch (err) {
    
      if (err.parent.code== "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "Group name already exists" });
      } 
      return res.status(404).json({ message: "Something went wrong" });
  };
}

const display_group= async (req, res, next) => {
    try {
        // console.log(req.user.id)
      const group= await UserGroup.findAll({where:{userId:req.user.id}}); // assuming you have the user ID
      const groupids = group.map(g => g.groupId);

      const g=await Group.findAll({where:{id:groupids}})
      return res.status(201).json({ listofgroup:g,message: "Successfully Created group" });
    } catch (err) {
      console.log(err)
      return res.status(401).json({ message: "error" });
  };
}

const groupcontent = async (req, res, next) => {
  try {
    // console.log("hjj",req.query.groupid)
    const g=(req.query.groupid)
    const g1=await Group.findAll({where:{id:g}})
    const groupname = g1.map(g => g.group_name);

    const data = await Chat.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where:{groupId:g}});
    
    const updatedData = data.map((d) => {
        if (d.User) {
          return { ...d.toJSON(), username: d.User.name };
        } else {
          return { ...d.toJSON() };
        }
      });
    const r=await UserGroup.findAll({where:{userId:req.user.id,groupId:g}})
    const admin = r.map(g => g.Isadmin);
    return res.status(200).json({ update: updatedData,current_userid:req.user.id,group_name:groupname[0] ,admin:admin[0]});
  } catch (err) {
      console.log(err)
      return res.status(500).json({ error: err });
  }
};


const joingroup = async (req, res, next) => {
  try {
    // console.log("hjj1",req.query.groupid,req.query.input)
    const g=(req.query.groupid)
    const user=await User.findOne({where:{
      [Op.or]: [
        { name: req.query.input },
        { email: req.query.input }
      ]
    }})
    console.log("lp",user)
    
    if(user==null){
      return res.status(200).json({message:"Username or Email is not exist"});
    }
    const g1=await UserGroup.create({userId:user.id,groupId:g})
    return res.status(200).json({message:"Successfully added in group"});
  } catch (err) {
      console.log(err)
    return res.status(500).json({ error: err });
  }
};

module.exports={
    create_group,display_group,groupcontent,joingroup
}