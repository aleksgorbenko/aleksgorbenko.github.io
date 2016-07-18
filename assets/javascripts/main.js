$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  // CTA animation on navbar link clicks
  $('a:contains("CONTACT")').click(function () {
    var $contact = $('#btn-contact');
    $contact.addClass('animated tada');
    setTimeout(function() {
      $contact.removeClass('animated tada');
    }, 3000);
  });

  $('a:contains("RESUME")').click(function () {
    var $resume = $('#btn-resume');
    $resume.addClass('animated flash');
    setTimeout(function() {
      $resume.removeClass('animated flash');
    }, 3000);
  });

  // navbar transparency on scroll
  $(document).ready(function(){
    var scroll_start = 1000;
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
});
