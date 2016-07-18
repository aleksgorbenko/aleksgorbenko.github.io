$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  // CTA animation on navbar link clicks
  $('a:contains("CONTACT")').click(function () {
    var $contact = $('#contact');

    setTimeout(function() {
      $contact.addClass('animated tada');
    }, 1000);

    setTimeout(function() {
      $contact.removeClass('animated tada');
    }, 3000);
  });

  $('a:contains("RESUME")').click(function () {
    var $resume = $('#btn-resume');
    setTimeout(function() {
      $resume.addClass('animated flash');;
    }, 1000);

    setTimeout(function() {
      $resume.removeClass('animated flash');
    }, 3000);
  });

  // navbar transparency on scroll
  $(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.navbar');
    var offset = startchange.offset();
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', '#353439');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
     });
  });

  // smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
