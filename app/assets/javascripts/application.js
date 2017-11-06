/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})


var room = 1;
function add_fields() {
    room++;
    var objTo = document.getElementById('room_fileds')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<div class="label visually-hidden">Room ' + room +':</div><div><table><thead><tr><th class="wide-th small-tr" scope="col"></th><th class="small-tr"scope="col"></th><th class="small-tr"scope="col"></th></tr></thead><tbody><tr><th scope="row"><input name="form-control" type="text" class="form-control" id="form-control" style="width: 360px;" value=""></th><td ><input name="form-control-1-2" type="text" class="form-control form-control-1-2" id="form-control-1-2" value=""></td><td ><input name="form-control-1-2" type="text" class="form-control form-control-1-2" id="form-control-1-2" value=""></td> </tr></tbody></table></div>';
    
    objTo.appendChild(divtest)
}


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




GOVUK.modules.start();


