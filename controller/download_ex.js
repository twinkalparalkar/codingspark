
require("dotenv").config()
const service=require('../services/s3_aws')
const download_tb=require('../model/File_download')
console.log("hello")

const downloadExpenses =  async (req, res) => {
    try {
        if(!req.user.ispreminum){
            console.log('jkk')
            return res.status(401).json({ success: false, message: 'User is not a premium User'})
        }
        const expenses1=await req.user.getExpenses()
          
        const ex_json=JSON.stringify(expenses1)
        const userId=req.user.id
        const filename=`expense${userId}/${new Date()}.txt`
        const fileURL=await service.uploadtoS3(ex_json,filename)
        const ex=await download_tb.create({filename:filename,fileURL:fileURL,userId:req.user.id})
        // console.log("yyyy",expenses1,ex_json,fileURL)
        res.status(200).json({fileURL,success:true})
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: err, success: false, message: 'Something went wrong'})
    }

};

const display_download=async (req,res,next)=>{
    try{
    const data=await download_tb.findAll({where:{userId:req.user.id}})
    res.status(200).json({update:data})
    }catch(err){
       return res.status(500).json({error:err})
    }

}
module.exports={
    downloadExpenses,display_download
}