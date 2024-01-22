import express from 'express'
import { getUsers, signin, signup,google} from '../controllers/auth.controller.js'

const router=express.Router()

router.post('/signup',signup).get('/',getUsers)
router.post('/signin',signin)
router.post('/google',google)

export default router