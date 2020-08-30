const Blog= require('../models/Blog')
const User= require('../models/User')
const jwt= require('jsonwebtoken')




const getCreate= (req,res)=>{
    res.render('blogs/create', {title: "Create New Blog"})
}


const createBlog= (req,res)=>{
    const allowedMimeTypes=['image/jpeg','image/jpg']
    const allowedFileExt= ['jpeg','jpg']
    const allowedFileSize= 15000
    
    const file= req.files.file
    const fileName= file.name.toLowerCase()
    const fileMimeType= file.mimetype
    const fileSize= file.size
    const fileExt= fileName.split('.')[fileName.split('.').length-1]
    const imgDist= `img${file.md5.substring(0,10)}${Date.now()}.${fileExt}`

    if(fileSize > allowedFileSize){
       res.send('File Is Too Big')
    }
    else if(!allowedFileExt.includes(fileExt)){
          res.send('You Can Only Upload JPG Or JPEg Images')
    }
     else if(!allowedMimeTypes.includes(fileMimeType)){
        res.send('You Can Only Upload JPG Or JPEg Images')
    }
    else{
        const token= req.cookies.jwt
        jwt.verify(token,'blogie secret code', async (err,decodedToken)=>{
            let user= await User.findById(decodedToken.id)
            const blogDetails={userId:'', creator:'', image:'', category:'', title:'', content:''}

            blogDetails.userId=user.id
            blogDetails.creator=user.username
            blogDetails.image=imgDist
            blogDetails.category=req.body.category
            blogDetails.title=req.body.title
            blogDetails.content=req.body.content
            const blog= new Blog(blogDetails)
            blog.save()
                .then(result=> {
                   file.mv(`${__dirname}/../public/assets/images/uploads/${imgDist}`, (err)=>console.log(err))
                    res.redirect('/blogs')
                 })
                .catch(err=> console.log(err))
        })

    }
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
    const token= req.cookies.jwt
    jwt.verify(token,'blogie secret code', async (err,decodedToken)=>{
        Blog.findById(req.params.id)
            .then(blog=> {
                if(blog.userId==decodedToken.id){
                    res.render('blogs/edit', {title: "Edit Blog", blog})
                }
                else{
                    res.status(404).render('notfound', {title: "Not Found"})
                }
            })
            .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))

    })
}


const editBlog= (req,res)=>{
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(result=> res.redirect(`/blog/${req.params.id}`))
        .catch(err=> console.log(err))
}


const deleteBlog= (req,res)=>{
    const token= req.cookies.jwt
    jwt.verify(token,'blogie secret code', async (err,decodedToken)=>{
        Blog.findById(req.params.id)
            .then(blog=> {
                if(blog.userId==decodedToken.id){
                    Blog.findByIdAndDelete(req.params.id)
                        .then(result=> res.redirect('/blogs'))
                        .catch(err=> console.log(err))
                }
                else{
                    res.status(404).render('notfound', {title: "Not Found"})
                }
            })
            .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))

    })
    
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