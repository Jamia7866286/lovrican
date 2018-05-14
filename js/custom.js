$(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
	
	/* Get Document full height */
	/* $('.page-content-inner').css('height', $(document).height()); */
	
	$('.ap-box-rating li').click(function () {
		$(this).addClass('active');
		$(this).prevAll().addClass('active');
		$(this).nextAll().removeClass('active');
	})
	
	// jQuery Slider
    $('.slider-wrap-prev, .slider-wrap-next').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('slider-wrap-prev')) displaySlides(-1);
        else if ($(this).hasClass('slider-wrap-next')) displaySlides(+1);
    });
	
	var indexItem = 1;
	var currentSlide = 0;
	displaySlides(indexItem)
	function displaySlides(slideNumber) {
		currentSlide = slideNumber + currentSlide;
		var movableItems = $('.slider-wrap-item');
		if(movableItems.length > 0)
		{
			if (currentSlide > movableItems.length) currentSlide = indexItem;
			if (currentSlide < 1) currentSlide = movableItems.length;
			for (var i = 0; i < movableItems.length; i++) movableItems[i].style.display = 'none';
			movableItems[currentSlide - 1].style.display = 'block';
		}
	}
});