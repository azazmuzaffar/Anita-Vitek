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
