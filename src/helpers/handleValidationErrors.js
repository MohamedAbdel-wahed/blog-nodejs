// Auth Validation 
module.exports.handleValidationErrors= (err)=>{
  let registerErrors={username:'', email:'', password:''}
  let loginErrors={email:'', password:''}

  // check the login email
  if(err.message=='Incorrect Email'){
        loginErrors.email="Incorrect Email"
   return loginErrors;
  }
  
  // check the login email
  if(err.message=='Incorrect Password'){
        loginErrors.password="Incorrect Password"
   return loginErrors;
  }

  // check if the email is unique
  if(err.code===11000){
        registerErrors['email']='email is already registered'
   return registerErrors;
  }
  
  // generate other errors
   Object.values(err.errors).forEach(({properties})=>{
    registerErrors[properties.path]=properties.message
  })
return registerErrors
}

