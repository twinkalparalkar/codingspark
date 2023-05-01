require("dotenv").config()
const AWS=require('aws-sdk')
const uploadtoS3=(data,filename)=>{
// function uploadtoS3(data,filename){
    console.log('111112222strttttttt')
    const BUCKET_NAME=process.env.BUCKET_NAME
    const IAM_USER_KEY=process.env.IAM_USER_KEY
    const IAM_USER_SECRET=process.env.IAM_USER_SECRET
    // time: 2023-04-27T06:18:44.157Z,  
    let s3bucket= new AWS.S3({
        accessKeyId:IAM_USER_KEY,
        secretAccessKey:IAM_USER_SECRET,
    })
    // console.log("ytttt",s3bucket)
    var params={
        Bucket:BUCKET_NAME,
        Key:filename,
        Body:data,
        ACL:'public-read'
    }

    return new Promise((resolve,reject)=>{
        s3bucket.upload(params,(err,s3response)=>{
            if(err){
                console.log(err)
                reject(err)
            }else{
                console.log('sssss',s3response.Location,s3response)
                resolve(s3response.Location)
            }
        })
    })
}
module.exports={uploadtoS3}
