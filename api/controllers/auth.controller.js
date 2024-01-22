import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import { errorHandler } from "../utilis/error.js"
import jwt from 'jsonwebtoken'

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




export const signin=async(req,res,next)=>{

const {email,password}=req.body;

if(!email||!password||email===''||password===''){
   next(errorHandler(400,'All fiels are required'))
}

try {
   const validUser=await User.findOne({email},)
if(!validUser){
  return next(errorHandler(404,'cant find your email you can signup and return to sign in'))
}
  const validPassword= bcrypt.compareSync(password,`${validUser.password}`)
   if(validPassword===false){
 return next(errorHandler(404,'password not true'))
   }
const token=jwt.sign({id:validUser._id,},process.env.JWT_SECRET)
const {password:pass,...rest}=validUser._doc
console.log(pass)
   res.status(200).cookie('access_token',token,{httpOnly:true}).json({message:'succes login',rest})
} catch (error) {
   next(error)
}


}


export const google=async(req,res,next)=>{

   const {name,email,googlePhotoUrl}=req.body;

try {
   const user =await User.findOne({email});
   if(user){
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
   const {password,...rest}=user._doc;
   res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
   }else{
      const generatedPassword=Math.random().toString(36).slice(-8) +Math.random().toString(36).slice(-8)
      const hashedPassword=bcrypt.hashSync(generatedPassword,10);
      const newUser=new User({username:name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4),email,password:hashedPassword,profilePicture:googlePhotoUrl})
      await newUser.save();
      const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET);
      const {password,...rest}=newUser._doc;
      res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
   }

} catch (error) {
   next(error)
}
}












 export const getUsers=async(req,res)=>{

const users=await User.find()

res.json({users})
 }