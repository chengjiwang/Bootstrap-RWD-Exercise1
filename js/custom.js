$(document).ready(function(){
	$('.nav a').click(function( ){
		$('.navbar-collapse').toggleClass('in');
	}); //end click 

    $("#main-slider").owlCarousel({
       // autoPlay: 5000,
      navigation : true, // Show next and prev buttons
      navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      slideSpeed : 500,
      pagination : false,
      paginationSpeed : 500,
      responsive: true,
      singleItem:true
    }); // end main-slider


    $("#owl-artist").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet :[768,2],
    itemsMobile: [479,1],
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination : false, //分頁
    // paginationSpeed : 800,
    slideSpeed : 700
  });
});

