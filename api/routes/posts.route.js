import express from 'express'
import {verifyToken}from '../utilis/verifyUser.js'
import { create ,getPosts,deletePost,updatepost} from '../controllers/post.controller.js';
const router=express.Router();





router.post('/',verifyToken,create);
router.get('/getposts',getPosts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletePost)
router.delete('/updatepost/:postId/:userId',verifyToken,deletePost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router