(function($) {
    "use strict";


    //    mobile menu
    $(".side_menu_btn").click(function() {
        $(".side_menu_area, .wraper").toggleClass('show');
    });
    $(".side_menu ul li a").click(function() {
        $(".side_menu_area, .wraper").removeClass('show');
    });
    //    mobile menu


    // Smooth scrolling start

    var scrollLink = $(".scroll");
    scrollLink.on('click', function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });

    // Smooth scrolling end


    // extra page open
    $(".single_work_item a").click(function() {
        $(".wraper").addClass('zoom_out');
    });

    $(".option_1_btn").click(function() {
        $(".opton_1, .wraper").addClass('open_1');
        $(".wraper").removeClass('fix');
        $(".opton_2, .opton_3, .opton_4, .opton_5, .opton_6").addClass('hide');
    });

    $(".option_2_btn").click(function() {
        $(".opton_2, .wraper").addClass('open_2');
        $(".wraper").removeClass('fix');
        $(".opton_1, .opton_3, .opton_4, .opton_5, .opton_6").addClass('hide');
    });
    $(".option_3_btn").click(function() {
        $(".opton_3, .wraper").addClass('open_3');
        $(".wraper").removeClass('fix');
        $(".opton_1, .opton_2, .opton_4, .opton_5, .opton_6").addClass('hide');
    });
    $(".option_4_btn").click(function() {
        $(".opton_4, .wraper").addClass('open_4');
        $(".wraper").removeClass('fix');
        $(".opton_1, .opton_2, .opton_3, .opton_5, .opton_6").addClass('hide');
    });
    $(".option_5_btn").click(function() {
        $(".opton_5, .wraper").addClass('open_5');
        $(".wraper").removeClass('fix');
        $(".opton_1, .opton_2, .opton_3, .opton_4, .opton_6").addClass('hide');
    });
    $(".option_6_btn").click(function() {
        $(".opton_6, .wraper").addClass('open_6');
        $(".wraper").removeClass('fix');
        $(".opton_1, .opton_2, .opton_3, .opton_4, .opton_5").addClass('hide');
    });

    // close_btn
    $(".close_btn").click(function() {
        $(".single_option, .wraper").removeClass('open_1 open_2 open_3 open_4 open_5 open_6');
        $(".wraper").removeClass('zoom_out');
        $(".wraper").addClass('fix');
        $(".opton_1, .opton_2, .opton_3, .opton_4, .opton_5, .opton_6").removeClass('hide');
    });
    // extra page open








}(jQuery));


// Loder Start
$(window).on("load", function(e) {
    $("#preloader").fadeOut();
});
// Loder End