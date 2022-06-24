$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    if($(window).width() > 100) {
		$(window).on('scroll', function() {
			if($(this).scrollTop() > 500) {
				$('#btnTop').fadeIn();
			} else {
				$('#btnTop').fadeOut();
			}
		});	
	}
});
/*
dhsjsds*/

