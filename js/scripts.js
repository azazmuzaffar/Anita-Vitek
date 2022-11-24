// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//     document.getElementById("header").style.backgroundColor = "white";
//   } else if (document.documentElement.scrollTop < 150) {
//     document.getElementById("header").style.backgroundColor = "none";
//   }

// //   if (document.documentElement.scrollTop < 150) {
// //     document.getElementById("header").style.backgroundColor = "none";
// //   }
// }

document.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").style.backgroundColor = "white";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
      }
});


// GSAP
let zaid_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },

  });

//   Animate the Line
zaid_tl.fromTo(".about-line", {
    scaleX: 0, 
}, {
    scaleX: 1,
    transformOrigin: "right center", 
    ease: "none"
})

//   Animate the heading
zaid_tl.fromTo("#about-header", {
    opacity: 0,
    y: -30
},{
    opacity: 1,
    y: 0 
})

zaid_tl.fromTo("#about-text", {
    x: -200,
    opacity: 0
},{
    x: 0,
    opacity: 1,  
})

//   Animate the text
// zaid_tl.to("#about-text", { 
//     text: `
// For women who love current fashion and care <br class="d-none d-md-block">
// about the environment, Anita Vitek created an <br class="d-none d-md-block">
// innovative modular design concept with <br class="d-none d-md-block">
// natural high-quality materials, that allows the <br class="d-none d-md-block">
// emphasis on individual style on the go.
// `
// })

 


  
