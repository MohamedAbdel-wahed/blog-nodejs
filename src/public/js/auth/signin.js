const signinForm= document.querySelector('#signin_form');
const emailErr= document.querySelector('#email_error');
const passwordErr= document.querySelector('#password_error');


signinForm.addEventListener('submit', async (e)=>{
   e.preventDefault();

   // reset input error 
   emailErr.textContent=""
   passwordErr.textContent=""

   
   let email= signinForm.email.value;
   let password= signinForm.password.value;
    

   try {
      const res= await fetch('/signin', {
           method:"POST",
           body:JSON.stringify({email,password}),
           headers:{'Content-Type':'application/json'}
       });
       
       const data= await res.json();
       if(data.errors){
           signinForm.password.value="";
           emailErr.textContent= data.errors.email;
           passwordErr.textContent= data.errors.password;
       }
       else{
           location.assign('/');
       }
        
   } 
   catch (err) {
       console.log(err)
       location.assign('/signin');

   }


});