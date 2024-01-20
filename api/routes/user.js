import User from '../models/user.model.js'
import express from 'express'
import { getUser } from '../controllers/user.controller.js'

const route=express.Router()


 route.get('/',getUser)


export default route