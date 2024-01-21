import express from 'express'
import { getUsers, signup } from '../controllers/auth.controller.js'

const router=express.Router()

router.post('/',signup).get('/',getUsers)


export default router