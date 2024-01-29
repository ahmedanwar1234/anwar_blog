import User from '../models/user.model.js'
import express from 'express'
import { getUser,updateUser,deleteUser,signout,getUsers} from '../controllers/user.controller.js'
import { verifyToken } from '../utilis/verifyUser.js'

const route=express.Router()


 route.get('/',getUser)
 route.put('/update/:userId',verifyToken,updateUser)
 route.delete('/delete/:userId',verifyToken,deleteUser)
 route.post('/signout',signout)
 route.get('/getusers',verifyToken,getUsers)


export default route