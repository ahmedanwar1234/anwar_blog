import express from 'express'
import {verifyToken}from '../utilis/verifyUser.js'
import { create ,getPosts} from '../controllers/post.controller.js';
const router=express.Router();





router.post('/',verifyToken,create);
router.get('/getposts',getPosts)

export default router