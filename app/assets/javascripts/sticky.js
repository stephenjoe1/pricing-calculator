$(document).ready(function() {
  var stickyNavTop = $('.payment-summary-small').offset().top;
   
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
        
  if (scrollTop > stickyNavTop) { 
      $('.payment-summary-small').addClass('sticky');
  } else {
      $('.payment-summary-small').removeClass('sticky'); 
  }
  };
   
  stickyNav();
   

  $(window).scroll(function() {
      stickyNav();
  });

  $('#card-number').keypress(function() {
    if(this.value.length >= 2) {
      $('#visa-image').removeClass("visa-hidden")
    }
  });

  $('#card-number').keypress(function() {
    if(this.value.length >= 2) {
      $('#accepted-image').removeClass("accepted-image-hidden")
    }
  });
});

