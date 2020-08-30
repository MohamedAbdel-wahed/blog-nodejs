const jwt = require('jsonwebtoken');


module.exports.createUserToken= (id)=>{
  return jwt.sign({id}, 'blogie secret code', {
      expiresIn: 60*60*24
  })

}


