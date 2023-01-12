const express=require('express');
const router = express.Router();

const {Auth} =require('../middleware/auth');

const {createPost, updatePost, deletePost, fetchPost}=require("../controllers/postController")

router.post('/posts', Auth, createPost)
router.post('/posts/:id', Auth, updatePost)
router.delete('/posts/:id', Auth, deletePost)
router.get('/posts/:id', Auth, fetchPost)




module.exports=router;