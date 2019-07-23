(function ($) {
  "use strict";

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });


  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  navbarCollapse();


  $(window).scroll(navbarCollapse);


})(jQuery);


// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function (el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );