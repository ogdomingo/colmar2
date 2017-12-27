$(document).ready(function() {
  //Press 'Start here' button and slide to #learning
  $('button').click(function(e) {
    //prevent default jumping action
    e.preventDefault();

    var linkHref = $(this).attr('href')
    console.log(linkHref);
    // animate html
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000, 'swing');
  });

});
