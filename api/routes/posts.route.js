import express from 'express'
import {verifyToken}from '../utilis/verifyUser.js'
import { create ,getPosts,deletePost} from '../controllers/post.controller.js';
const router=express.Router();





router.post('/',verifyToken,create);
router.get('/getposts',getPosts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletePost)

export default router