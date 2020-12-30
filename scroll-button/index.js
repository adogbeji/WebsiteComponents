// jshint esversion:6

const scrollButton = document.querySelector('.scroll-top');  // References scroll button


// 1) Plain JavaScript with no animation

// scrollButton.addEventListener('click', function() {  // The 'function' keyword ensures Internet Explorer compatability
//   window.scrollTo(0, 0);  // x-val(px), y-val(px)
// });


// 2) Plain JavaScript with animation

// scrollButton.addEventListener('click', function() {  // The 'function' keyword ensures Internet Explorer compatability
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'  // Allows smooth animation
//   });
// });


// 3) Using jQuery

scrollButton.addEventListener('click', function() {  // The 'function' keyword ensures Internet Explorer compatability
  $('html, body').animate({scrollTop: 0}, 'slow');
});
