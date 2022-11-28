/**
 ------------------------- HEADER AREA -------------------------
 */


// HEADER SCROLL FEATURE
document.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").style.backgroundColor = "white";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
      }
});

/**
 ------------------------- HOMPAGE -----------------------------
 **/



//  HOMEPAGE BANNER GSAP
let bannerHeader = document.querySelector(".home-page-banner__text-1");
let bannerText = document.querySelector(".home-page-banner__text-2");
gsap.fromTo([bannerHeader, bannerText], {
  y: 280,
  opacity: 0,
}, {
  y: 0,
  toggleActions: "restart pause reverse restart",
  opacity: 1,
  duration: 2
});





// HOMEPAGE ABOUT GSAP TIMELINE
let zaid_about = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=80%",
        anticipatePin: 1,
      },

  });

//   The about Line
zaid_about.fromTo(".about-line", {
    scaleX: 0, 
}, {
    scaleX: 1,
    transformOrigin: "right center", 
    ease: "none"
})

//   The about heading text
let aboutHeader = document.querySelector(".about__header");
let aboutText = document.querySelector(".about-text");
let aboutLine = document.querySelector(".about-line");
zaid_about.fromTo([aboutHeader, aboutText], {
    opacity: 0,
    scale: 1.5,

},{
    opacity: 1,
    // text: "ABOUT",
    scale: 1,
}).to( [aboutHeader, aboutText, aboutLine], {
  delay: 1,
  opacity: 0
})






// HOMEPAGE IMAGE GRID GSAP TIMELINE
let zaid_grid = gsap.timeline({
    scrollTrigger: {
        trigger: "#image-grid",
        toggleActions: "restart pause play restart",
        start: "top bottom+=350px",
        scrub: true,
        // pin: true,
      },

  });

let gridImg1 = document.querySelector(".image-grid__img-1");
let gridImg2 = document.querySelector(".image-grid__img-2");
let gridImg3 = document.querySelector(".image-grid__img-3");

  zaid_grid.fromTo([gridImg1, gridImg2, gridImg3], {
    scrollTrigger: gridImg2,
    scale: 1.15,
}, {
    scale: 1,
    ease: "slow(0.7, 0.7, false)",
    // duration: 2,
});






// HOMEPAGE 20% Limited preorder GSAP TIMELINE
let zaid_preorder = gsap.timeline({
  scrollTrigger: {
      trigger: "#preorder",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=110%",
      anticipatePin: 1,
    },

});

//   The preorder Line
zaid_preorder.fromTo(".preorder-line", {
  scaleX: 0, 
}, {
  scaleX: 1,
  transformOrigin: "center left", 
  ease: "none"
})

//   The preorder heading text
let preorderHeader = document.querySelector(".preorder__header");
let preorderText = document.querySelector(".preorder__header-2");
let preorderLine = document.querySelector(".preorder-line");

zaid_preorder.fromTo([preorderHeader, preorderText], {
  opacity: 0,
  scale: 1.5,

},{
  opacity: 1,
  // text: "ABOUT",
  scale: 1,
}).to( [preorderHeader, preorderText, preorderLine],{
  delay: 1,
  opacity:0
})



// PREORDER HORIZONTAL TITLE
gsap.fromTo(".pre-order__text", {
  // opacity: 0,
  scale: 0.5,

}, {
  scrollTrigger: {
    trigger: ".pre-order__text",
    scrub: true,
  },
  scale: 1,
})

// All the Images
// let horizontalImg = gsap.utils.toArray(".scroll-container-body img");
// gsap.fromTo(".scroll-container-body img", {
//   opacity: 0,
// }, {
//   scrollTrigger: {
//     trigger: ".scroll-container-body img",
//     scrub: true,
//   },
//   opacity: 1
// })

// HORIZONTAL SCROLL
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

  
