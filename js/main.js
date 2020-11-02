$(document).ready(function () {
   
    $(document).on('click','.menu_toggle', function() {
        $(this).toggleClass("open");
        $('.mobile_menu').toggleClass('active')
        $('body, html').toggleClass('no_scroll');
    })

    // sliders
    var swiper = new Swiper('.banner__slider', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next'
        },
    });
    var swiperMap = new Swiper('.map__slider', {
        pagination: {
          el: '.map__slider .swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.swiper-button-next'
        },
    });
    // sliders end

    // tabs
      $(document).on('click', '.tab__nav_item', function () {
        $(this).addClass('active').siblings().removeClass('active')  
        $(`*[data-tab]`).not('.tab__nav_item').hide();
        $(`*[data-tab='${$(this).data('tab')}']`).show();
      })
    // tabs end
});

