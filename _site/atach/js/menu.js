$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.trigger').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 1024 ) {			
			$('.trigger').removeAttr('style');
		 }
	});//end resize
	$('') 
});//end ready