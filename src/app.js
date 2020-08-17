const express= require('express')
const mongoose= require('mongoose')
const Blog= require(`${__dirname}/models/Blog.js`)


const app= express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('src/public'))
app.set('view engine', 'ejs')
app.set('views','src/views')


const dbURI="mongodb+srv://mohamed:mohamed221999@node-blog.fzquz.mongodb.net/blogie?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
        .then(()=> app.listen(5000))
        .catch(err=> console.log(err))



app.get('/blogs/create', (req,res)=>{
    res.render('blogs/create', {title: "Create New Blog"})
})
        
app.post('/blogs', (req,res)=>{
  const blog= new Blog(req.body)
   blog.save()
       .then(result=> res.redirect('/blogs'))
       .catch(err=> console.log(err))
})  

app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then(result=> res.render('blogs/get', {title: "Blogs", blogs: result}))
        .catch(err=> console.log(err))
})

app.get('/blog/:id', (req,res)=>{
    Blog.findById(req.params.id)
        .then(result=> res.render('blogs/show', {title: "Blog Details", blog: result}))
        .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))
})

app.get('/blog/edit/:id', (req,res)=>{
    Blog.findById(req.params.id)
        .then(result=> res.render('blogs/edit', {title: "Edit Blog", blog: result}))
        .catch(err=> res.status(404).render('notfound', {title: "Not Found"}))
    // Blog.findByIdAndUpdate(req.params.id)
    //     .then(result=> res.render('blogs/show', {title: "Blog Details", blog: result}))
    //     .catch(err=> console.log(err))
})


app.get('/', (req,res)=>{
    res.render('index', {title: "Home"})
})

app.get('/about', (req,res)=>{
    res.render('about', {title: "About"})
})

app.get('/authors', (req,res)=>{
    res.render('authors', {title: "Authors"})
})

app.use((req,res)=>{
    res.status(404).render('notfound', {title: "Not Found"})
})
