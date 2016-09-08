$(document).ready(function(){

  // flexslider
  $('.flexslider').flexslider({
    animation: "slide",
		directionNav: false,
		touch: true,
		pauseOnHover: true,
    slideshowSpeed: 5000,
    start: function() {
			$.waypoints('refresh');
		}
  });


  // skills slideshow
  $('.skillSlider').flexslider({
    animation: "slide",
		directionNav: false,
		touch: true,
		pauseOnHover: true,
    slideshowSpeed: 5000,
    start: function() {
			$.waypoints('refresh');
		}
  });



  // smooth scrooling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000);
          return false;
        }
      }
    });
  });

  // mobile nav bar
  $(".button-collapse").sideNav();
});
