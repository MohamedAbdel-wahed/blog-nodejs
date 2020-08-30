const blogTitles= document.querySelectorAll('h1.title');


blogTitles.forEach(title=>{
    if(title.textContent.length > 40){
        title.textContent= title.textContent.substring(0, 40);
        title.textContent+='...'
    }
 
});


