const express= require('express')
const expressFileupload= require('express-fileupload')
const mongoose= require('mongoose')
const cookieParser= require('cookie-parser')
const methodOverride = require('method-override')
const blogRoutes= require('./routes/blog')
const authRoutes= require('./routes/auth')
const {checkCurrentUser}= require('./middleware/auth')



const app= express()
app.use(expressFileupload())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('src/public'))
app.use(methodOverride('_method'))
app.use(cookieParser())
mongoose.set('useFindAndModify',false);
app.set('view engine','ejs')
app.set('views','src/views')


const dbURI="mongodb+srv://mohamed:mohamed221999@node-blog.fzquz.mongodb.net/blogie?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
        .then(()=> app.listen(5000))
        .catch(err=> console.log(err))


app.get('*', checkCurrentUser)

app.use(authRoutes)

app.use(blogRoutes)

app.get('/', (req,res)=>{
    res.render('index', {title: "Home"})
})

app.get('/about', (req,res)=>{
    res.render('about', {title: "About"})
})

app.use((req,res)=>{
    res.status(404).render('notfound', {title: "Not Found"})
})
