// document.addEventListener("DOMContentLoaded", function() {
//     let myCarousel = document.getElementById('myCarousel');
//     let pauseButton = document.getElementById('pauseButton');
//     let playButton = document.getElementById('playButton');
  
//     // Start carousel on document load
//     new bootstrap.Carousel(myCarousel, {
//       interval: 2000 // Set your desired interval in milliseconds
//     });
  
//     // Pause and play buttons
//     pauseButton.addEventListener('click', function() {
//       let carousel = bootstrap.Carousel.getInstance(myCarousel);
//       carousel.pause();
//     });
  
//     playButton.addEventListener('click', function() {
//       let carousel = bootstrap.Carousel.getInstance(myCarousel);
//       carousel.cycle();
//     });
//   });

// const dropdown = document.querySelector('button.carousel-control-prev');
// const prevIcon = document.querySelector('.portfolio-item');
// const modelOpen = document.querySelector('.carousel-control-prev-icon ');

// // dropdown.addEventListener('click', function(event) {
// //     const composed = event.composedPath()
// //     event.stopPropagation();

// //     console.log(composed)
// // });
// // prevIcon.addEventListener('click', function(event) {
// //     console.log(event)
// //     event.stopPropagation();
// // },{ capture: true });
  

// document.querySelector(".portfolio-link").addEventListener("click", function(event) {
//     console.log(event)
//     event.preventDefault(); 
//     // Prevents the default behavior of the link
//     // Your additional code here
//   },{capture:true});
var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
    hoverAnimationEl.classList.add('alwaysAnimate') 

})

  
  
  