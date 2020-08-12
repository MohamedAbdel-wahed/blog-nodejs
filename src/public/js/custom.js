/*  Create Active Class For the Current Rounte */

const path= location.pathname;
const home= document.querySelector('#home')
const about= document.querySelector('#about')
const authors= document.querySelector('#authors')


if(path=="/"){
    home.classList.add('text-gray-800')
    about.classList.remove('text-gray-800')
    authors.classList.remove('text-gray-800')
}
else if(path=="/about"){
    about.classList.add('text-gray-800')
    home.classList.remove('text-gray-800')
    authors.classList.remove('text-gray-800')
}
else if(path=="/authors"){
    authors.classList.add('text-gray-800')
    home.classList.remove('text-gray-800')
    about.classList.remove('text-gray-800')
}
else{
    console.error("Route Not Found");
}







