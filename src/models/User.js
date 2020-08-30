const mongoose= require('mongoose')
const {isEmail}= require('validator')
const bcrypt= require('bcrypt')


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'you must enter a valid email']
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength:[8,'password must be 8 chars at least']
    }
})


// hashing password
userSchema.pre('save', async function(next){
    const salt= await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
    next()
})


userSchema.statics.login= async function(email,password){
     const user= await this.findOne({email})
     if(!user){
         throw Error("Incorrect Email") 
      return;
     }

    const auth= await bcrypt.compare(password,user.password)
    if(!auth){
        throw Error("Incorrect Password") 
      return;
    }
   
 return user;
}


const User= mongoose.model('User',userSchema)

module.exports= User