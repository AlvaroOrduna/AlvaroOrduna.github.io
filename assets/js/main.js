jQuery(document).ready(function($) {
    $('.bar-inner').css('width', '0');

    $(window).on('load', function() {
        $('.bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 1000);
        });
    });
});
