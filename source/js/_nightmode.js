$(document).ready(function() {
  var $nightmodeToggle = $('#nightmode'),
      $hours = (new Date()).getHours(),
      $body = $('body'); 
  
  if ($hours >= 20 || $hours < 6) {
    $body.addClass('nightmode');
  } else {
    $body.addClass('daymode');
  }
  
  $nightmodeToggle.on('click', function() {
    var $this = $(this);
    $body.toggleClass('nightmode');
    $body.toggleClass('daymode');
  });  
});
