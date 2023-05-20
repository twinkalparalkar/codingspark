const Chat=require('../models/chat')
require("dotenv").config()

const AWS=require('aws-sdk')

const fs = require('fs');

const BUCKET_NAME=process.env.BUCKET_NAME
    const IAM_USER_KEY=process.env.IAM_USER_KEY
    const IAM_USER_SECRET=process.env.IAM_USER_SECRET
    // time: 2023-04-27T06:18:44.157Z,  
    let s3= new AWS.S3({
        accessKeyId:IAM_USER_KEY,
        secretAccessKey:IAM_USER_SECRET,
    })
   
const upload =  async (req, res) => {
    // console.log("uppp",req.body,req.file,req.user.id,req.query.groupid)
    const filePath = req.file.path;
  const fileContent = fs.readFileSync(filePath);
  const filename=`chatapp${req.user.id}/${req.query.groupid}.jpg`
  var params = {
    Bucket: BUCKET_NAME,
    Key: filename,
    Body: fileContent,
    ContentType: req.file.mimetype,
    ACL:'public-read'
    // Expires: 60
  };
  s3.putObject(params,async (err, data) => {
    if (err) {
      console.error('Error uploading file:', err);
      res.status(500).send('Error uploading file to S3');
    } else {
        const fileUrl = `https://${BUCKET_NAME}.s3.amazonaws.com/${params.Key}`; 
        
        // console.log('File URL:', fileUrl);
        await Chat.create({message:fileUrl,userId:req.user.id,groupId:req.query.groupid})
      // console.log('File uploaded successfully',data);
      res.send('File uploaded to S3');
    }
  });
}

module.exports={
    upload
}