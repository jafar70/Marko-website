
$(document).ready(function () {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('clear');
        $('.nav').toggleClass('nav-transparent');
        $('.nav-center>a>h2').toggleClass('white');
        $('.nav-right>a>img').toggleClass('white-svg');
        $('.nav-center>a>img').toggleClass('white-svg');
        $('#home').css('margin-top', '0');
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      direction: 'horizontal',
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.next',
        prevEl: '.previous',
      },
      breakpoints: {
        960: {
          slidesPerView: 1,
          spaceBetween: 15,
          centeredSlides: false,
        }
        },
    });
    

$('#menu').click(function(){
	$('.nav-wrapper').toggleClass('active');
});

$('#filter-menu').click(function(){
	$('.nav-wrapper').toggleClass('active');
});

$(document).ready(function() {
            $(".back-link").hover(function(){
              $(this).find(".back-button").animate({width: "toggle"});
            });
        });