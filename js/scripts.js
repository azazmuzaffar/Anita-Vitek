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
        end: "+=80%"
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

},{
    opacity: 1,
    text: "ABOUT"
})

// zaid_tl.fromTo("#about-text", {
//     x: -200,
//     opacity: 0
// },{
//     x: 0,
//     opacity: 1,  
// })

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

let sections = gsap.utils.toArray(".panel");
 
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });

  
