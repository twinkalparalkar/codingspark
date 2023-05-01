const User=require('../model/user')
const expense=require('../model/expense')
require("dotenv").config()
const sequelize = require('../model/database')


const postreq=async (req,res,next)=>{
    const t=await sequelize.transaction()
    try{
        if(!req.body.expense || !req.body.description || !req.body.category){
            throw new error("this is required")
        } 
        const a=req.body.category
        const b=req.body.expense
        const c=req.body.description
        // console.log(a,c,b)
        const ex=await expense.create({category:a,expense1:b,description:c,userId:req.user.id},{transaction:t})
            const totalex=Number(req.user.total)+Number(b)
            console.log(totalex,req.user)
            await User.update({total:totalex},{where:{id:req.user.id},transaction:t})
                await t.commit()
                res.status(201).json({new_data:ex})
            
    }catch(err){
        console.log(err)
        await t.rollback()
        return res.status(500).json({error:err})
    }
}

// const ITEM_PER_PAGE=2
const display_req=async (req,res,next)=>{
    try{
        const page=+req.query.page ||1
        const pagesize=+req.query.pagesize ||2
        let totalitems
        let c=await expense.count({where:{userId:req.user.id}})
        totalitems=c
        console.log("wwwwww",c,page,pagesize,Math.ceil(totalitems/pagesize))
    const data=await expense.findAll({where:{userId:req.user.id},
        offset:Math.floor((page - 1) * pagesize),
        limit:pagesize
    })
    // console.log("lplp",ITEM_PER_PAGE,(page-1)/ITEM_PER_PAGE,(ITEM_PER_PAGE*page) < totalitems,c)
    res.status(200).json({
        update:data,
        preminum:req.user.ispreminum,
        currentPage:page,
        hasNextPage:(pagesize*page) < totalitems,
        nextPage:page+1,
        hasPreviousePage:page>1,
        previewPage:page-1,
        lastPage:Math.ceil(totalitems/pagesize)
        })

    }catch(err){
       return res.status(500).json({error:err})
    }

}
const delete_req=async (req,res)=>{
    const t=await sequelize.transaction()
    try{
        const uid=req.params.id;
        if(uid==undefined|| uid.length==0){
           return res.status(400).json({error:err})
        }
        var r1=await expense.findOne({where:{id:uid,userId:req.user.id}})
        const totalex=Number(req.user.total)-Number(r1.expense1)
        // console.log("kuuj",totalex,r1.expense1,r1)
        await User.update({total:totalex},{where:{id:req.user.id},transaction:t})
        var r=await expense.destroy({where:{id:uid,userId:req.user.id},transaction:t}) 
        await t.commit()
        res.sendStatus(200)
    }
    catch(err){
        await t.rollback()
        res.status(500).json({error:err})
    }
}

module.exports={
    postreq,display_req,delete_req
}

