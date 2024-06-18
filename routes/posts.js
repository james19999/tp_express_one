import express from 'express'
import {creatPost ,deletePost ,getPosts ,getPost ,updatePost } from '../controller/postcontroller.js'
const router=express.Router();


//get all post
router.get('/',getPosts)

//single post
router.get('/:id',getPost);

router.post('/',creatPost)

router.put('/:id',updatePost)

router.delete('/:id', deletePost)
export default router