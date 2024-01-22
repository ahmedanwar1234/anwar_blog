import express from 'express'
import { getUsers, signin, signup } from '../controllers/auth.controller.js'

const router=express.Router()

router.post('/signup',signup).get('/',getUsers)
router.post('/signin',signin)

export default router