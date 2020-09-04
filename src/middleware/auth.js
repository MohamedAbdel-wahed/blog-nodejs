const jwt= require('jsonwebtoken')
const User= require('../models/User')


// check if authenticated
module.exports.isAuth= (req,res,next)=>{
    const token= req.cookies.jwt
    jwt.verify(token,'blogie secret code', (err,decodedToken)=>{
        if(err){
            res.redirect('/signin')
        }
        else{
            next()
        }
    })
}


// protect auth forms from being accessed if the user is logged in 
module.exports.preventAccessIfAuth= (req,res,next)=>{
    const token= req.cookies.jwt
    jwt.verify(token,'blogie secret code', (err,decodedToken)=>{
        if(err){
           next()
        }
        else{
            res.redirect('/')
        }
    })
}


// check the current user
module.exports.checkCurrentUser= (req,res,next)=>{
    const token= req.cookies.jwt
    if(token){
        jwt.verify(token,'blogie secret code', async (err,decodedToken)=>{
            if(err){
                res.locals.user= null 
                next()
            }
            else{
                let user= await User.findById(decodedToken.id)
                res.locals.user= user
                next()
            }
        })
    }
    else{
        res.locals.user= null
        next()
    }
}