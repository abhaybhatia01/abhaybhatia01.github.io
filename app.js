const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navLinks li");
   


    burger.addEventListener( 'click', (e) =>{
         // toggle nav
       nav.classList.toggle("navActive");

       // animate things
       navLinks.forEach((link, index) => {
           if( link.style.animation){
               link.style.animation="";

           }else{
               link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 +0.5}s`
           }
       });
       //burger animation
       burger.classList.toggle("toggle")
    })
}

const congratsAnimation=() =>{

    const firstText = document.querySelector('#firstText');
    const heart = document.querySelector('.heart');

    firstText.addEventListener('click',(e)=>{


        heart.classList.toggle("withHeart");
        heart.classList.toggle("heart");



    })
}



congratsAnimation();
navSlide();