
/*================== JS IMPORTS ===================== */
// Jquery
// import JQuery from "./jQuery.js"
// import HeroSlider from "./modules/HeroSlider"

// Instantiate a new object using our modules/classes
// var jquery = new JQuery()
// var heroSlider = new HeroSlider()


// Jquery
// OWL carousel
// Lazy sizes
// Scripts


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
  } else {
    document.getElementById("header").style.backgroundColor = "none";
  }
}


/*================== MOBILE MENU ===================== */
// 1 ELEMENT
let hamburgerIcon = document.querySelector(".hamburger-script")
let mobileNav = document.querySelector(".mobile-nav-script")
let mobileNavShowing = false


//  2 EVENT
hamburgerIcon.addEventListener("click", toggleMobileMenu)


// 3 ACTION
function toggleMobileMenu(){
  // mobileMenu.classList.toggle("site-header__nav-links__is-active");
  if(mobileNavShowing){
    // Add the initial values
    mobileNav.classList.add("d-none");
    // Remove the Mobile Classes
    mobileNavShowing = false
  }else{
    // Remove the initial values
    mobileNav.classList.remove("d-none");
    // Add the Mobile Classes
    mobileNavShowing = true
  }
}


/*================== ANIMATION ===================== */
// Fade Up Function
function reveal__up() {
  // Find all reveal-up elements
  var reveals = document.querySelectorAll(".reveal-up");

  // Loop through all of them
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 65;

      // If the element is in within the screen
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal__up);

// To check the scroll position on page load
reveal__up();





// Fade left
function reveal__left() {
  // Find all reveal-up elements
  var reveals = document.querySelectorAll(".reveal-left");

  // Loop through all of them
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

      // If the element is in within the screen
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal__left);

// To check the scroll position on page load
reveal__left();



// Fade left
function reveal__right() {
  // Find all reveal-up elements
  var reveals = document.querySelectorAll(".reveal-right");

  // Loop through all of them
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

      // If the element is in within the screen
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal__right);

// To check the scroll position on page load
reveal__right();
  

/*================== OWL CAROUSEL ===================== */

$(document).ready(function(){
    $('.owl-one').owlCarousel({
        autoplay:true,
        autoplayTimeout:3500,
        smartSpeed:1500,
        loop:true,
        // margin:10,
        dots: false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});




// LAZY LOADING
$(document).ready(function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = $(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = $(window).scrollTop();
          lazyloadImages.each(function() {
              var el = $(this);
              if(el.offset().top - scrollTop < window.innerHeight) {
                var url = el.attr("data-src");
                el.attr("src", url);
                el.removeClass("lazy");
                lazyloadImages = $(".lazy");
              }
          });
          if(lazyloadImages.length == 0) { 
            $(document).off("scroll");
            $(window).off("resize");
          }
      }, 20);
    }

    $(document).on("scroll", lazyload);
    $(window).on("resize", lazyload);
  }
})

