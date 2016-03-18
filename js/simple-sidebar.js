//Open and close sidebar
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $(".wrapper").toggleClass("toggled");
});

/* 
 * If Open sidebar on small screen, when resize to big screen sidebar doesn't close
*/
$(window).resize(function() {
    console.log("Resize window to: " + $(window).width() + " x " + $(window).height());
    if ( $(window).width() > 768) {
        if($(".wrapper").hasClass( "toggled" )){
            $('.wrapper').removeClass('toggled');
        }    
    } 

    // Set .sidebar-wrapper-inner height, to generate overflow-y on small screen
    var height = $(this).height() - 65; 
    $(".sibebar-wrapper-inner").css({"height": height  + "px"} );
});