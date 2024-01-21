import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import { errorHandler } from "../utilis/error.js"


export const signup=async(req,res,next)=>{
    const {username,email,password}=await req.body
   if(!username || !email ||!password ||email===''||username===''|password===''){
      next(errorHandler(500,'all fields are required'))
   }
;
   const newUser=new User({
    username,email,password:bcrypt.hashSync(password,10)
   })

   try {
      
      await newUser.save()
   res.json({message:"signup successful !",newUser})
   } catch (error) {
      next(error)
   }
}


 export const getUsers=async(req,res)=>{

const users=await User.find()

res.json({users})
 }