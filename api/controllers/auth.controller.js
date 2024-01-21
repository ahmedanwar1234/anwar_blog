import User from "../models/user.model.js"
import bcrypt from 'bcrypt'


export const signup=async(req,res)=>{
    const {username,email,password}=await req.body
   if(!username || !email ||!password ||email===''||username===''|password===''){
    return res.status(400).json({message:'All field are required'})
   }
;
   const newUser=new User({
    username,email,password:bcrypt.hashSync(password,10)
   })

   try {
      
      await newUser.save()
   res.json({message:"signup successful !",newUser})
   } catch (error) {
      res.status(500).json({message:error.message})
   }
}


 export const getUsers=async(req,res)=>{

const users=await User.find()

res.json({users})
 }