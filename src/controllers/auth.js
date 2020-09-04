const User= require('../models/User')
const {handleValidationErrors}= require('../helpers/handleValidationErrors')
const {createUserToken}= require('../helpers/createUserToken')


const getSignup= (req,res)=>{
    res.render('auth/signup', {title: "Signup"})
}

const signup= (req,res)=>{
    const user= new User(req.body) 
    user.save()
        .then(result=> {
            let token= createUserToken(user.id)
            res.cookie('jwt', token, {maxAge: 1000*60*60*24, httpOnly: true})
           res.status(201).json({userId: user.id})
        })
        .catch(err=>{
            const errors= handleValidationErrors(err)
            res.status(400).json({errors})
        })
}

const getSignin= (req,res)=>{
    res.render('auth/signin', {title: "Signin"})
}

const signin= async (req,res)=>{
    const {email,password}= req.body 

    try{
        const user= await User.login(email,password)
        let token= createUserToken(user.id)
        res.cookie('jwt', token, {maxAge: 1000*60*60*24, httpOnly: true})
        res.status(201).json({userId: user.id})
    }
    catch(err){
        const errors= handleValidationErrors(err)
        res.status(400).json({errors})
    }
}


const logout= (req,res)=>{
    const token= req.cookies.jwt
    res.cookie('jwt',token,{maxAge:1})
    res.redirect('/')
}



module.exports= {
  getSignup,
  signup,
  getSignin,
  signin,
  logout
}


