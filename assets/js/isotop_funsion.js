(function ($) {
    "use strict";
  
        // portfolio iso top start
    $('.work_wrapper').isotope({
        itemSelector: '.single_work_item',
        layoutMode: 'fitRows',
        transitionDuration: 500,
        percentPosition: true,
    });
    // Isotope click function

    $('.work_menu li').click(function () {
        $('.work_menu li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.work_wrapper').isotope({
            filter: selector
        });
        return false;
    });
    // portfolio iso top End




}(jQuery));