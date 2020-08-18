const Blog= require('../models/Blog')



const getCreate= (req,res)=>{
    res.render('blogs/create', {title: "Create New Blog"})
}


const createBlog= (req,res)=>{
    const blog= new Blog(req.body)
     blog.save()
         .then(result=> res.redirect('/blogs'))
         .catch(err=> console.log(err))
  }


const getBlogs= (req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then(result=> res.render('blogs/get', {title: "Blogs", blogs: result}))
        .catch(err=> console.log(err))
}


const getBlog= (req,res)=>{
    Blog.findById(req.params.id)
        .then(result=> res.render('blogs/show', {title: "Blog Details", blog: result}))
        .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))
}


const getEdit= (req,res)=>{
    Blog.findById(req.params.id)
        .then(result=> res.render('blogs/edit', {title: "Edit Blog", blog: result}))
        .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))
}


const editBlog= (req,res)=>{
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(result=> res.redirect('/blogs'))
        .catch(err=> console.log(err))
}


const deleteBlog= (req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
        .then(result=> res.redirect('/blogs'))
        .catch(err=> console.log(err))
}



module.exports={
    getCreate,
    createBlog,
    getBlogs,
    getBlog,
    getEdit,
    editBlog,
    deleteBlog
}