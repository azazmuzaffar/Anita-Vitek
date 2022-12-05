/**
 ------------------------- HEADER AREA -------------------------
 */


// HEADER SCROLL FEATURE
document.addEventListener('scroll', (e) => {
    let url = window.location.origin
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").style.backgroundColor = "white";
        // document.querySelector(".header_logo").src = `${url}/images/icons/logo.png`
        document.querySelector(".header_logo").src = `./images/icons/logo.png`
        document.querySelector(".header_logo-mobile").src = `./images/icons/logo.png`

      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        // document.querySelector(".header_logo").src = `${url}/images/icons/aV-header-main-site.png`
        document.querySelector(".header_logo").src = `./images/icons/aV-header-main-site.png`
        document.querySelector(".header_logo-mobile").src = `./images/icons/aV-header-main-site.png`

      }
});

/**
 ------------------------- HOMPAGE -----------------------------
 **/

// HOMEPAGE VIDEO FEAUTURE
var video=document.getElementById("myVideo") ;   

video.addEventListener('click', function(e){
  video.muted = !video.muted;
});

//  HOMEPAGE BANNER GSAP
let bannerHeader = document.querySelector(".home-page-banner__text-1");
let bannerText = document.querySelector(".home-page-banner__text-2");
gsap.fromTo([bannerHeader, bannerText], {
  y: 280,
  opacity: 0,
}, {
  y: 0,
  // toggleActions: "play pause resume reset",
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
        end: "+=70%",
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
    scale: 1.3,

},{
    opacity: 1,
    // text: "ABOUT",
    scale: 1,
})





// HOMEPAGE IMAGE GRID GSAP TIMELINE
let zaid_grid = gsap.timeline({
  // toggleActions: "restart pause resume pause",
    scrollTrigger: {
        trigger: "#image-grid",
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
    scale: 1.25,
}, {
    scale: 1,
    ease: "slow(0.7, 0.7, false)",
    // duration: 2,
});


var index = 0;
var slides = document.querySelectorAll(".slides");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();



// HOMEPAGE 20% Limited preorder GSAP TIMELINE
let zaid_preorder = gsap.timeline({
  scrollTrigger: {
      trigger: "#preorder",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=70%",
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
  scale: 1,
}).to( [preorderHeader, preorderText, preorderLine],{
  delay: 1,
  opacity:0
})



// PREORDER HORIZONTAL TITLE
gsap.fromTo(".pre-order__text", {
  // opacity: 0,
  scale: 1.5,
  x: '-110vw',

}, {
  scrollTrigger: {
    trigger: ".hor-1",
    scrub: true,
    pin: true,
    start: "top top",
    // end: "+=10%",
    anticipatePin: 1,
  },
  x: 0,
  scale: 1,
})

// HORIZONTAL SCROLL

let zaid_hor = gsap.timeline()
let sections = gsap.utils.toArray(".panel");
 
zaid_hor.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-container",
      pin: true,
      scrub: 1,
      // snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
})

  
  // THE GIRL IN THE MIDDLE
  gsap.utils.toArray(".Zpanel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });
  


  // THE STORY
  let zaid_story = gsap.timeline({
    scrollTrigger: {
        trigger: "#story",
        scrub: true,
        pin: true,
        start: "top top-=15px",
        end: "+=150%",
        anticipatePin: 1,
      },

  });

//   The story Line
zaid_story.fromTo(".story-line", {
    scaleX: 0, 
}, {
    scaleX: 1,
    transformOrigin: "right center", 
    ease: "none"
})

//   The story heading text
let storyHeader = document.querySelector(".story__header");
let storyBgImage = document.querySelector(".story-bg-img");
let storyText = document.querySelector(".story-text");
let storyImg2 = document.querySelector(".the-story-second-img");
let storybtn = document.querySelector(".story-btn");
zaid_story.fromTo([storyHeader], {
    opacity: 0,
    scale: 1.5,

},{
    opacity: 1,
    scale: 1,
}).fromTo([storyBgImage, storyText, storyImg2, storybtn], {
  opacity: 0
}, {
  opacity: 1,
  scale: 1,
})


// HOMEPAGE 3 IMAGES AT FOOTER
let zaid_img = gsap.timeline({
  // toggleActions: "restart pause resume pause",
    scrollTrigger: {
        trigger: ".img1",
        start: "top bottom+=350px",
        scrub: true,
        // pin: true,
      },

  });

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

zaid_img.fromTo([img1, img2, img3], {
    scrollTrigger: ".img1",
    scale: 1.25,
}, {
    scale: 1,
    ease: "slow(0.7, 0.7, false)",
    // duration: 2,
});


let hpVideo1 = document.getElementById("video1")
gsap.to("#video1", {
  scrollTrigger : {
    trigger: "#video1",
    start: "top center",
    onEnter: ({progress, direction, isActive}) => { hpVideo1.play(); console.log("Video 1 Starts")},
    onLeave: ({progress, direction, isActive}) => { hpVideo1.pause(); console.log("Video 1 Pause")},
    onEnterBack: ({progress, direction, isActive}) => { hpVideo1.play(); console.log("Video 1 Starts")},
    onLeaveBack: ({progress, direction, isActive}) => { hpVideo1.pause(); console.log("Video 1 Pause")},
  }
})  

hpVideo1.addEventListener('click', function(e){
  hpVideo1.muted = !hpVideo1.muted;
});

let hpVideo2 = document.getElementById("video2")
gsap.to("#video2", {
  scrollTrigger : {
    trigger: "#video2",
    start: "center top",
    end: "+=160%",
    onEnter: ({progress, direction, isActive}) => { hpVideo2.play(); console.log("Video 2 Starts")},
    // onLeave: ({progress, direction, isActive}) => { hpVideo2.pause(); console.log("Video 2 Pause")},
    // onEnterBack: ({progress, direction, isActive}) => { hpVideo2.play(); console.log("Video 2 Starts")},
    // onLeaveBack: ({progress, direction, isActive}) => { hpVideo2.pause(); console.log("Video 2 Pause")},
  }
})
  