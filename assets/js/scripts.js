$(document).ready(function() {

  // Add/remove active class for clicking on a menu item
  $('#mainNav li a').on('click', function(event) {
    $('#mainNav li a').removeClass('active');
    $(this).addClass('active');
  });

  // Add/remove active class for scrolling by menu
  $(window).on('scroll', function() {
    console.log('scroll');
    $('.menuItem').each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          if (id === undefined) {
            $('#mainNav li a').removeClass('active');
          } else {
            $('#mainNav li a').removeClass('active');
            $('#mainNav li a[href*=' + id + ']').addClass('active');
          }
        }
    });
  });

  // moves the window down 1 pixel to fix skills issue
  window.addEventListener("hashchange", function () {
      window.scrollTo(window.scrollX, window.scrollY + 1);
  });

});