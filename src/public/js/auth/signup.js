const signupForm= document.querySelector('#signup_form');
const usernameErr= document.querySelector('#username_error');
const emailErr= document.querySelector('#email_error');
const passwordErr= document.querySelector('#password_error');

signupForm.addEventListener('submit', async (e)=>{
   e.preventDefault();

   // reset input error 
   usernameErr.textContent=""
   emailErr.textContent=""
   passwordErr.textContent=""

   
   let username= signupForm.username.value;
   let email= signupForm.email.value;
   let password= signupForm.password.value;
    

   try {
      const res= await fetch('/signup', {
           method:"POST",
           body:JSON.stringify({username,email,password}),
           headers:{'Content-Type':'application/json'}
       });
       
       const data= await res.json();
       if(data.errors){
           signupForm.password.value="";
           usernameErr.textContent= data.errors.username;
           emailErr.textContent= data.errors.email;
           passwordErr.textContent= data.errors.password;
       }
       else{
           location.assign('/');
       }
        
   } 
   catch (err) {
       console.log(err)
   }


});