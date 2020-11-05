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
        on : {
            slideChange: function(i) {
                const id = swiper.$el.find('.swiper-slide').eq(swiper.activeIndex).find('.youtube_player').attr('id')
                swiper.$el.find('.banner__control').removeClass('pause')
                jQuery(`#${id}`).YTPPause()
            }
        }
    });
    var swiper2 = new Swiper('.map__slider', {
        pagination: {
          el: '.swiper-pagination2',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.swiper-button-next'
        },
        on : {
            slideChange: function(i) {
                swiper2.$el.find('.swiper-pagination-bullet').eq(swiper2.realIndex).addClass('swiper-pagination-bullet-active')
                $('.map__slider .swiper-pagination-bullet').eq(swiper2.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
            }
        }
    });

        // add custom bullets
    $(function () {
        let sliderCount;

        $('.custom_bullets').each(function () {
            sliderCount = $(this).find('.swiper-slide').length

            for (let i = 0; i < sliderCount; i++) {
                $(this).find('.swiper_bullets').append(`<span class="swiper-pagination-bullet"></span>`)
            }

            $(this).find('.swiper-pagination-bullet').eq(0).addClass('swiper-pagination-bullet-active')

            $(document).on('click',  '.custom_bullets .swiper-pagination-bullet', function() {
                let slider = $(this).parents('.custom_bullets').data('swiper')
                $(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active')
                const index = $(this).index()

                switch (slider) {
                    case 'swiper2':
                        swiper2.slideTo(index)
                        break;
                
                    default:
                        break;
                }
             });
        })
    })    
    // sliders end

    // tabs
      $(document).on('click', '.tab__nav_item', function () {
        $(this).addClass('active').siblings().removeClass('active')  
        $(`*[data-tab]`).not('.tab__nav_item').removeClass('active');
        $(`*[data-tab='${$(this).data('tab')}']`).addClass('active');
      })
    // tabs end
    
});

