const mongoose= require('mongoose')


const blogSchema= new mongoose.Schema({
    userId:{
        type: String,
        required: true 
    }, 
    creator:{
        type: String,
        required: true 
    },
     category:{
        type: String,
        required: true 
    },
     image:{
        type: String,
        required: true 
    },
     title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
}, {timestamps: true})


const Blog= mongoose.model('Blog', blogSchema)

module.exports= Blog