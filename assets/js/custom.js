window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar2").style.padding = "0.25rem 1rem 0rem 1rem";
    document.getElementById("logo").style.width = "170px";
  } else {
    document.getElementById("navbar2").style.padding = ".5rem 1rem .5rem 1rem";
    document.getElementById("logo").style.width = "200px";
  }
}



(function ($) {
  "use strict";


  /* ==========================================================================
    COUNTER UP 
========================================================================== */

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.carousel').carousel({
    interval: 6000,
  })

  /* Closes the Responsive Menu on Menu Item Click*/
  $('.navbar-collapse .navbar-nav a').on('click', function () {
    $('.navbar-toggler:visible').click();
  });
  /*END MENU JS*/


  /* ----------------------------------------------------------- */
  /*  Fixed header
  /* ----------------------------------------------------------- */


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }



  });
  /*
   * ----------------------------------------------------------------------------------------
   *  SMOTH SCROOL JS
   * ----------------------------------------------------------------------------------------
   */

  $('a.smoth-scroll').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
  });



  /* ==========================================================================
    SCROLL SPY
========================================================================== */

  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: 195
  });

  new WOW().init();



  /*START GOOGLE MAP*/
  function initialize() {
    var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      center: new google.maps.LatLng(40.7127837, -74.00594130000002)
    };
    var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: 'assets/img/map_pin.png',
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  /*END GOOGLE MAP*/


})(window.jQuery);