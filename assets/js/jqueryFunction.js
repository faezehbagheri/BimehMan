$(document).ready(function () { 
    $('.q-tabcontent').hide();
    var activeTab = $(".q-tabs").find('a.active-filter').data('trigger');
    $('#' + activeTab).show();

    $('.q-tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.q-tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('active-filter');
        $(this).siblings('a').removeClass('active-filter');
    });

    
    $('.h-tabcontent').hide();
    var activeTab = $(".h-tabs").find('a.active-filter').data('trigger');
    $('#' + activeTab).show();

    $('.h-tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.h-tabcontent:not(#' + tabId + ')').hide();
        $(this).addClass('active-filter');
        $(this).siblings('a').removeClass('active-filter');
    });

    var $card = $("#content-1");


    /// card ///
    $card.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $card.owlCarousel({
        // center: true,
        // loop: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        items: 4,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $card.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
});