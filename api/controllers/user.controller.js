import User from "../models/user.model.js"
import { errorHandler } from "../utilis/error.js"
import bcryptjs from 'bcrypt'


export const getUser=(req,res)=>{
    res.send('new user')
}





export const updateUser=async(req,res,next)=>{

if(req.user.id !==req.params.userId){
   return next(errorHandler(404,'You are not allowe to update this user'))
}
if(req.body.password){

    if(req.body.password.length<6){
        return next(errorHandler(404,'Passwor must be at least 6 characters'))
    }
    req.body.password=bcryptjs.hashSync(req.body.password,10);
    
}
if(req.body.username){
    if(req.body.username.length<7||req.body.username.length>20){
        return next(errorHandler(404,'Username must be between 7 and 20 characters'))
    }

    if(req.body.username!==req.body.username.toLowerCase()){
        return(errorHandler(400,'Username must be lowercase'))
    }

    if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
        return next(errorHandler(400,'Username must contain only letters and numbers'))
    }
  

}  

try {
        const updateUser=await User.findByIdAndUpdate(req.params.userId,{
            $set:{
                 username:req.body.username,
                 email:req.body.email,
                 password:req.body.password,
                 profilePicture:req.body.profilePicture,

            }
           
        },{new:true}
    
        
    )
            const {password,...rest}=updateUser._doc
            res.send(rest)
    } catch (error) {
        next(error)
    }

}






export const deleteUser=async(req,res,next)=>{

    try {
        
        if(req.user.id!==req.params.userId){
            return next(errorHandler(403,'You are not allowed to delete this user'))
        }
        const response=await User.findByIdAndDelete(req.user.id)
        if (!response){
        return next(errorHandler('Cant delete the account'))
        }
        
        res.json({success:true,message:"User has been deleted"})
    } catch (error) {
        next(error)
    }

}