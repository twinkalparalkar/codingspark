const Group=require('../models/group')
const User=require('../models/user')
// const Chat =require('../models/chat')
const UserGroup=require('../models/usergroup')
const Invite=require('../models/invite')
// const { Op } = require('sequelize');

const invite_check = async (req, res, next) => {
    try {
      // console.log("hjj",req.user.id)
      const g1=await Invite.findAll({where:{userId:req.user.id}})
      const groupids = g1.map(g => g.groupId);
      const g2=await Group.findAll({where:{id:groupids}})
      return res.status(200).json({ update: g2,current_userid:req.user.id});
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: err });
    }
  };
  
const addgroup = async (req, res, next) => {
    try {
      // console.log("hjj1",req.query.groupid,req.user.id)
      const g=(req.query.groupid)
      const g1=await UserGroup.create({userId:req.user.id,groupId:g})
      await Invite.destroy({where:{userId:req.user.id,groupId:g}})
      return res.status(200).json({message:"Group Joined"});
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err });
    }
  };
  
const displaygroupmember = async (req, res, next) => {
    try {
      // console.log("hjj5",req.query.groupid,req.user.id)
      const g=(req.query.groupid)
      const g1=await UserGroup.findAll({groupId:g})
      const userids = g1.map(g => g.userId);
      const filteredArray = userids.filter((element) => element !== req.user.id);
    
      const data=await User.findAll({ where:{id:filteredArray}})
      let updatedata = await Promise.all(data.map(async (g) => {
          return {
            userid: g.id,
            username: g.name
          };
        }));
    
        updatedata = await Promise.all(updatedata.map(async (g) => {
        const r = await UserGroup.findOne({ where: { userId: g.userid, groupId: req.query.groupid} });
          console.log(r.Isadmin);
        return {
            userid: g.userid,
            username: g.username,
            admin:r.Isadmin
          };
        }));
        // console.log("op",updatedata)
      return res.status(200).json({update:updatedata,message:"Group Joined"});
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: err });
    }
  };
  
const removeuser = async (req, res, next) => {
    try {
      // console.log("hjj1",req.query.groupid,req.query.userid)
      const g=(req.query.groupid)
      const g1=await UserGroup.destroy({where:{userId:req.query.userid,groupId:g}})
      return res.status(200).json({message:"Removed from group"});
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: err });
    }
  };

const makeadmin = async (req, res, next) => {
    try {
      // console.log("hjj1",req.query.groupid,req.query.userid)
      const g=(req.query.groupid)
      const group=await UserGroup.findOne({where:{userId:req.query.userid,groupId:g}})
      const g1=await group.update({Isadmin:true})
      return res.status(200).json({message:"made admin to this user."});
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: err });
    }
  };

module.exports={
   
    invite_check,addgroup,displaygroupmember,removeuser,makeadmin
}