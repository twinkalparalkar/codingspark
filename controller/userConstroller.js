const User=require('../model/user')
const book=require('../model/book')
const cart=require('../model/cart')
require("dotenv").config()
const sequelize = require('../model/database')


const postreq=async (req,res,next)=>{
    try{
        const a=req.query.book
        
        // console.log(a)
        const ex=await cart.create({bookId:a,userId:req.user.id})
        // console.log(req.user)
            
       return res.status(201).json({message:"added in cart"})
            
    }catch(err){
        console.log(err)
        return res.status(500).json({error:err})
    }
}

// // const ITEM_PER_PAGE=2
const display_req=async (req,res,next)=>{
    try{
        const page=+req.query.page ||1
        const pagesize=+req.query.pagesize ||2
        let totalitems
        let c=await book.count()
        totalitems=c
        console.log("wwwwww",c,page,pagesize,Math.ceil(totalitems/pagesize))
    const data=await book.findAll({
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
    try{
        const bookid=req.params.id;
        
        var r=await cart.destroy({where:{userId:req.user.id,bookId:bookid}}) 
       
        res.sendStatus(200)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}


const getreq=async (req,res,next)=>{
    try{
        
        const ex=await cart.findAll({where:{userId:req.user.id}})
        const bookids = ex.map(g => g.bookId);
        // console.log(bookids)
        
        const b=await book.findAll({where:{id:bookids}})
        // console.log(b)
        let updatedata = await Promise.all(b.map(async (g) => {
            return {
              bookid: g.id,
              amount: g.amount,
              name:g.name

            };
          }));
       return res.status(201).json({update:updatedata,message:"added in cart"})
            
    }catch(err){
        console.log(err)
        return res.status(500).json({error:err})
    }
}
module.exports={
   display_req,postreq,getreq,delete_req
}

