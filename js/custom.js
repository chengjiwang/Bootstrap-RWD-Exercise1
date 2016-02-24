$(document).ready(function(){
	$('.nav a').click(function( ){
		$('.navbar-collapse').toggleClass('in');
	}); //end click 

    $("#main-slider").owlCarousel({
      // autoPlay: 5000
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      responsive: true,
      singleItem:true

 
      
 
    }); // end main-slider

    // $("#owl-demo").owlCarousel({
     
    //     // autoPlay: 3000, //Set AutoPlay to 3 seconds

    //     items : 4,
    //     itemsDesktop : [1199,3],
    //     itemsDesktopSmall : [979,3],
    //     itemsTablet :[768,2],
    //     itemsMobile: [479,1]
     
    // });

    $("#owl-artist").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet :[768,2],
    itemsMobile: [479,1],
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination : false, //分頁
    paginationSpeed : 800,
    slideSpeed : 700
  });
});

