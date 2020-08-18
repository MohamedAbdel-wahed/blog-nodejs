const express= require('express')
const mongoose= require('mongoose')
const methodOverride = require('method-override')
const blogRoutes= require('./routes/blog')


const app= express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('src/public'))
app.use(methodOverride('_method'))
mongoose.set('useFindAndModify', false);
app.set('view engine', 'ejs')
app.set('views','src/views')


const dbURI="mongodb+srv://mohamed:mohamed221999@node-blog.fzquz.mongodb.net/blogie?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
        .then(()=> app.listen(5000))
        .catch(err=> console.log(err))


app.use(blogRoutes)

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
