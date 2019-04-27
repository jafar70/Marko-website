jQuery(document).ready(function () {
    // run on DOM ready
    // grab target from URL hash (i.e. www.example.com/page-a.html#target-name)

    var target = window.location.hash;

    // only try to scroll to offset if target has been set in location hash

    if (target != '') {
        $('.introsection').hide(0);
        $('#swipe-down').hide(0);
        $('body').css('overflowY', 'scroll');
        $('#home-mobile-nav').css('position', 'fixed');
        $('#home').css('margin-top', '0');
        var $target = jQuery(target);
        jQuery('html, body').stop().animate({
                'scrollTop': $target.offset().top - 150
            }, // set offset value here i.e. 50
            2000,
            'swing',
            function () {
                window.location.hash = target - 40;
            });
    }
});
$(document).ready(function () {
    $(document).on('click', 'a[href^="index.html#index"]', function (event) {
        $('.introsection').hide(0);
        $('#swipe-down').hide(0);
    });

    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('.nav').toggleClass('nav-transparent');
        $('.nav-center').toggleClass('hide');
        $('.nav-right').toggleClass('hide');
        $('#home').css('margin-top', '0');
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}

$(document).on('click', 'a[href^="#index"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 1200);
    $('.introsection').delay(1300).hide(0);
    $('#swipe-down').delay(1300).hide(0);
    $('body').css('overflowY', 'scroll');
        $('#home-mobile-nav').css('position', 'fixed');
        $('#home').css('margin-top', '0');
});

jQuery(function ($) {

    var $nav = $('#home-mobile-nav'),
        $win = $(window),
        winH = $win.height() * 1; // Get the window height.

    $win.on("scroll", function () {
        $nav.toggleClass("doch", $(this).scrollTop() > winH);
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });

});

//$('.arrow').click(function () {
//    $('.introsection').delay(800).hide(0);
//    $('#swipe-down').delay(800).hide(0);
//    $('body').css('overflowY', 'scroll');
//});
        $(document).ready(function(){
          var tabWrapper = $('#tab-block'),
              tabMnu = tabWrapper.find('.tab-mnu  li'),
              tabContent = tabWrapper.find('.tab-cont > .tab-pane');

          tabContent.not(':first-child').hide();

          tabMnu.each(function(i){
            $(this).attr('data-tab','tab'+i);
          });
          tabContent.each(function(i){
            $(this).attr('data-tab','tab'+i);
          });

          tabMnu.click(function(){
            var tabData = $(this).data('tab');
            tabWrapper.find(tabContent).hide();
            tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').fadeIn(1000);
          });

          $('.tab-mnu > li').click(function(){
            var before = $('.tab-mnu li.active');
            before.removeClass('active');
            $(this).addClass('active');
           });
        });

var swiper = new Swiper('.swiper-container', {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });