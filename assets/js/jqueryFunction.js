$(document).ready(function () { 

    $('.bime__content').hide();
    var activeTab = $(".bime-tabs").find('a.bime-active').data('trigger');
    $('#' + activeTab).show();

    $('.bime-tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.bime__content:not(#' + tabId + ')').hide();
        $(this).addClass('bime-active');
        $(this).siblings('a').removeClass('bime-active');
    });

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
    var $suggestion = $("#suggestion");


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
        responsive:{
            0:{
                items: 1,
            },
            900:{
                items: 3,
            },
            1500:{
                items:4,
            }
        },
        rtl: true,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $card.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    
    /// suggestion ///
    $suggestion.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $suggestion.owlCarousel({
        responsive:{
            0:{
                items: 1,
            },
            500:{
                items: 2,
            },
            1500:{
                items:4,
            }
        },
        rtl: true,
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $suggestion.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    
});


function matchStart(term, text) {
    if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
        return true;
    }

    return false;
}

$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
    $("select").select2({
        matcher: oldMatcher(matchStart),
        dropdownAutoWidth: true,
        dir: "rtl",
        language: "fa"
    })
    $('#multiple').select2({
        // matcher: oldMatcher(matchStart),
        maximumSelectionLength: 3,
        dir: "rtl",
        // placeholder: 'داروی خود را وارد کنید'
      });
});