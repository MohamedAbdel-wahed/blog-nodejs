const mongoose= require('mongoose')
const Schema= mongoose.Schema

const blog= new Schema({
    category:{
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


const Blog= mongoose.model('Blog', blog)

module.exports= Blog