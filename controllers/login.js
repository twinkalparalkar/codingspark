const User=require('../models/user')
var bcrypt = require('bcryptjs');

// const signup=async (req,res,next)=>{
//     try{
//         const a=req.body.name
//     const b=req.body.email
//     const c=req.body.phone
//     const d=req.body.password
//     console.log(req.body)
//     if(a== null || b==null|| c==null){
//         return res.status(400).json({err:"bad param"})
//     }
//     const saltround=10
//     let r=bcrypt.hash(d,saltround,async (err,hash)=>{
//         await User.create({name:a,email:b,phone:c,password:hash})
            
//         return r.status(201).json({message:"Succefully create new user"})
        
//     })
//     }catch(err){
//         if (err.code === 'ER_DUP_ENTRY') {
//             // Handle the duplicate entry error by displaying a message to the user
//             console.error('Duplicate email address');
//             return null;
//           } else {
//             // Handle any other errors by logging them and returning null
//             console.error(err);
//             return null;
//           }
//         // if(res.status==405){
//         //     res.json({err:"duplicate email"})}
//         //     // console.log(err)
//         //     return res.status(500).json({err:"check email,password(User already exists)"})
            
//     }
// }
const signup = async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const password = req.body.password;
  
      console.log(req.body);
  
      if (!name || !email || !phone || !password) {
        return res.status(400).json({ error: "Bad parameters" });
      }
  
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
  
      await User.create({ name, email, phone, password: hash });
  
      return res.status(201).json({ message: "Successfully created new user" });
    } catch (err) {
      if (err.parent.code== "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "User already exists" });
      } else {
        // console.log("kkk",err,err.parent,err.parent.code)
        console.error(err,err.code);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  };



module.exports={
    signup
}
