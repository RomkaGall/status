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
            nextEl: '.map__slider .swiper-button-next'
        },
        on : {
            slideChange: function(i) {
                swiper2.$el.find('.swiper-pagination-bullet').eq(swiper2.realIndex).addClass('swiper-pagination-bullet-active')
                $('.map__slider .swiper-pagination-bullet').eq(swiper2.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
            }
        }
    });

    var swiper3 = new Swiper('.apartments__slider', {
        pagination: {
          el: '.swiper-pagination3',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.apartments__slider .swiper-button-next'
        },
        on : {
            init: function (i) {
                const title = i.slides[i.activeIndex].dataset['title']
                const profit = i.slides[i.activeIndex].dataset['profit']
                const year = i.slides[i.activeIndex].dataset['year']
                const month = i.slides[i.activeIndex].dataset['month']
                const area = i.slides[i.activeIndex].dataset['area']
                const sum = i.slides[i.activeIndex].dataset['sum']
                const plan = i.slides[i.activeIndex].dataset['plan']
                // const image = 

                i.$el.find('.slider_title').text(title)
                i.$el.find('.slider_info_text').text(`Доход в год: ${profit} ₽`)

                $('.apartments__block_title').text(title)
                $('.apartments__values_item--year .value').text(`${year} ₽`)
                $('.apartments__values_item--month .value').text(`${month} ₽`)
                $('.apartments__values_item--area .value').text(`${area} ₽`)
                $('.apartments__values_item--sum .value').text(`${sum} ₽`)
                $('.popup--plan .popup__image').attr('src', `img/content/${plan}`)
                
            },
            slideChange: function(i) {
                swiper3.$el.find('.swiper-pagination-bullet').eq(swiper3.realIndex).addClass('swiper-pagination-bullet-active')
                $('.apartments__slider .swiper-pagination-bullet').eq(swiper3.realIndex).siblings().removeClass('swiper-pagination-bullet-active')

                const title = i.slides[i.activeIndex].dataset['title']
                const profit = i.slides[i.activeIndex].dataset['profit']
                const year = i.slides[i.activeIndex].dataset['year']
                const month = i.slides[i.activeIndex].dataset['month']
                const area = i.slides[i.activeIndex].dataset['area']
                const sum = i.slides[i.activeIndex].dataset['sum']
                const plan = i.slides[i.activeIndex].dataset['plan']

                i.$el.find('.slider_title').text(title)
                i.$el.find('.slider_info_text').text(`Доход в год: ${profit} ₽`)

                $('.apartments__block_title').text(title)
                $('.apartments__values_item--year .value').text(`${year} ₽`)
                $('.apartments__values_item--month .value').text(`${month} ₽`)
                $('.apartments__values_item--area .value').text(`${area} ₽`)
                $('.apartments__values_item--sum .value').text(`${sum} ₽`)
                $('.popup--plan .popup__image').attr('src', `img/content/${plan}`)
            }
        }
    });

    var swiper4 = new Swiper('.infrastructure__slider', {
        pagination: {
          el: '.swiper-pagination4',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.infrastructure__slider .swiper-button-next'
        },
        on : {
            slideChange: function(i) {
                swiper4.$el.find('.swiper-pagination-bullet').eq(swiper2.realIndex).addClass('swiper-pagination-bullet-active')
                $('.infrastructure__slider .swiper-pagination-bullet').eq(swiper2.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
            }
        }
    });

    var swiper5 = new Swiper('.team__slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: 4,
        centerInsufficientSlides: true,
        loop: true,
        autoHeight: true
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
    
    $(document).on('click', '.apartments__show_plan', function () {
        $(".popup--plan").addClass("show");
    })

    $(document).on("click", ".close", function () {
        $(".popup").removeClass("show");
    });

    $(document).on("click touchstart", function (e) {
        if (
            !$(e.target).closest('*[data-toggle="modal"]').length &&
            !$(e.target).closest(".popup__content").length 
        ) {
            $(e.target).removeClass("show");
        }

        e.stopPropagation();
    });
});

