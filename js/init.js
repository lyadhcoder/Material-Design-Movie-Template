(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown();
    $(".dropdown-trigger2").dropdown();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
    });
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 4000);
  }); // end of document ready
})(jQuery); // end of jQuery name space
