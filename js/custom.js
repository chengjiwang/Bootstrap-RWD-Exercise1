$(document).ready(function() {
    var $animation_elements = $('.animation-element'),
        $window = $(window);
    function checkView() {
        var window_height = $window.height(),
            window_top_position = $window.scrollTop(),  
            window_bottom_position = (window_top_position + window_height);
     
        $.each($animation_elements, function() {
            var $element = $(this),
                element_height = $element.outerHeight(), 
                element_top_position = $element.offset().top, 
                element_bottom_position = (element_top_position + element_height);
              
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } 
        });
    }
    $window.on('scroll resize', checkView);
    $window.trigger('scroll');

    $('#menu-nav a').click(function() {
        $('#menu-nav').toggleClass('in');
    }); //end click 

    $('#menu-nav a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 20 //scrollTop 是scroll的垂直位置
        }, 1000);
        return false;
    });

    $("#main-slider").owlCarousel({
        autoPlay: 5000,
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 500,
        pagination: false,
        paginationSpeed: 500,
        responsive: true,
        singleItem: true
    }); // end main-slider

    $("#owl-artist").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false, //分頁
        // paginationSpeed : 800,
        slideSpeed: 700
    });
});
