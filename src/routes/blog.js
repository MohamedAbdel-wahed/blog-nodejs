const express= require('express')
const router= express.Router()
const blogController= require('../controllers/blog')



router.get('/blogs/create', blogController.getCreate)
        
router.post('/blogs', blogController.createBlog)  

router.get('/blogs', blogController.getBlogs)

router.get('/blog/:id', blogController.getBlog)

router.get('/blog/edit/:id', blogController.getEdit)

router.put('/blog/:id', blogController.editBlog)

router.delete('/blog/:id', blogController.deleteBlog)


module.exports= router