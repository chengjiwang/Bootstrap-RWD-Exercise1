$(document).ready(function(){
	$('.nav a').click(function( ){
		$('.navbar-collapse').toggleClass('in');
	}); //end click 

    $("#main-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
    }); // end main-slider

    $("#owl-demo").owlCarousel({
     
        // autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile: [479,1]
     
    });
});

