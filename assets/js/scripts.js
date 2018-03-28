$(document).ready(function() {
    $('#mainNav li a').on('click', function(event) {
      console.log($(this).parent().find('a'));
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
  });

    $(window).on('scroll', function() {
    //     $('.menuItem').each(function() {
    //         if($(window).scrollTop() >= $(this).offset().top) {
    //             var id = $(this).attr('id');
    //             $('#nav nav a').removeClass('active');
    //             $('#nav nav a[href=#'+ id +']').addClass('active');
    //         }
    //     });
    });

   });