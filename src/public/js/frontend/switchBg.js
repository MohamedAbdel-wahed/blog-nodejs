const images_list= ['blogbg1.jpg','blogbg2.jpg','blogbg3.jpg','blogbg4.jpg','blogbg5.jpg','blogbg6.jpg'];
const imgTemp= document.querySelector('#imgTemp');


 const randomizeBg= ()=>{
    let index=Math.floor(Math.random()*images_list.length);
    imgTemp.setAttribute('src',`/assets/images/${images_list[index]}`);
}


setInterval(randomizeBg,4000);
