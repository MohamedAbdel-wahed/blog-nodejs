const express= require('express')
const router= express.Router()
const authController= require('../controllers/auth')
 


router.get('/signup', authController.getSignup)


router.post('/signup', authController.signup)


router.get('/signin', authController.getSignin)


router.post('/signin', authController.signin)


router.get('/logout', authController.logout)


module.exports= router