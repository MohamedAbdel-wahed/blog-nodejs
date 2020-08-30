/*  Create Active Class For the Current Route */

const path= location.pathname;
const navLinks= document.querySelectorAll('#navLinks>li');


navLinks.forEach(link=>{
  const id= link.getAttribute('id')
  if(path == `/${id}`){
      link.classList.add('text-gray-900');
  }
})






