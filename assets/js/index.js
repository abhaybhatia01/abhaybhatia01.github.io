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



// var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
// var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
//     hoverAnimationEl.classList.add('alwaysAnimate') 

// })



// var hoverAnimationTriggerList = document.querySelectorAll('#carouselExampleAutoplaying');
// var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
//     hoverAnimationEl.addEventListener("mouseover",(e)=>{
//         hoverAnimationEl.querySelectorAll("img").forEach((img)=>{
//             img.classList.add('zoom') 
//             console.log("hello")
//         })
//     })


// })
document.querySelectorAll(".do-magic-container").forEach(Element=>{
    Element.children[0].addEventListener("click",(e)=>{
        Element.innerHTML = `  <div class="project-app-screen-wrapper"><iframe deffer class="project-app-screen" src=${Element.children[0].dataset.magicLink}  title="embedApp"> </iframe> </div>`;
    })
})

// const mediaQuery = window.matchMedia('(max-width: 768px)');

// if (mediaQuery.matches) {
//   // The user is on a mobile device.
// } else {
//     document.querySelectorAll(".carousel").forEach(Element=>{
//         Element.children[0].addEventListener("click",(e)=>{
//             Element.innerHTML = `  <div class="project-app-screen-wrapper"><iframe deffer class="project-app-screen" src=${Element.children[0].dataset.magicLink}  title="embedApp"> </iframe> </div>`;
//         })
//     })
//   // The user is not on a mobile device.
// }