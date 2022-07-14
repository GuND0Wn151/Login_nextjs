import User from "../../models/user";
import connectDB from "../../utils/connectDB";
export default async function  handler(req,res){
      await connectDB();      
    const data = req.body
    const email = data.email
    const password =  data.password
    const emailExist = await User.findOne({email:email})
    console.log(emailExist)
    console.log("here")
    if(!emailExist) return res.status(400).json({message:"Invalid Credentials"});
    if (emailExist.password == password){
       return  res.send({logged:emailExist.email});
    } else{
      return res.status(400).json({message:"Invalid Credentials"});
    }
}