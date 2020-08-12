const express= require('express')
const mongoose= require('mongoose')



const app= express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('src/public'))
app.set('view engine', 'ejs')
app.set('views','src/views')
app.listen(5000)


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
