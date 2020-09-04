const express= require('express')
const router= express.Router()
const authController= require('../controllers/auth')
const {preventAccessIfAuth}= require('../middleware/auth')
 


router.get('/signup', preventAccessIfAuth, authController.getSignup)


router.post('/signup', preventAccessIfAuth, authController.signup)


router.get('/signin', preventAccessIfAuth, authController.getSignin)


router.post('/signin', preventAccessIfAuth, authController.signin)


router.get('/logout', authController.logout)


module.exports= router