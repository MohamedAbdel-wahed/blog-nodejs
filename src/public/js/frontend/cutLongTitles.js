const blogTitles= document.querySelectorAll('h1.title');


blogTitles.forEach(title=>{
    if(title.textContent.length > 45){
        title.textContent= title.textContent.substring(0, 45);
        title.textContent+='...'
    }
 
});


