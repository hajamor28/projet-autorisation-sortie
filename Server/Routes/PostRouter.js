const PostController= require ('../Controllers/PostController')
const express= require('express')
const router = express.Router()

//Add new Post
router.post('/',PostController.AddPost)

module.exports= router 