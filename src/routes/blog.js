const express= require('express')
const router= express.Router()
const blogController= require('../controllers/blog')
const {isAuth}= require('../middleware/auth')

 

router.get('/blogs/create', isAuth, blogController.getCreate)
        
router.post('/blogs', isAuth, blogController.createBlog)

router.get('/blogs', isAuth, blogController.getBlogs)

router.get('/blog/:id', isAuth, blogController.getBlog)

router.get('/blog/edit/:id', isAuth, blogController.getEdit)

router.put('/blog/:id', isAuth, blogController.editBlog)

router.delete('/blog/:id', isAuth, blogController.deleteBlog)


module.exports= router