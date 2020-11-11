$(document).ready(function () {
       // add custom bullets
       const createBullets = () => {
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
                    case 'swiper':
                        swiper.slideTo(index)
                        break;
                    case 'swiper2':
                        swiper2.slideTo(index)
                        break;
                    case 'swiper3':
                        swiper3.slideTo(index)
                        break;
                    case 'swiper4':
                        swiper4.slideTo(index)
                        break;
                    case 'swiper5':
                        swiper5.slideTo(index)
                        break;
                    case 'swiper6':
                        swiper6.slideTo(index)
                        break;
                    case 'swiper7':
                        swiper7.slideTo(index)
                        break;
                
                    default:
                        break;
                }
             });
        })
    }
    createBullets()

    $(document).on('click','.menu_toggle', function() {
        $(this).toggleClass("open");
        $('.menu').toggleClass('show')
        $('body, html').toggleClass('no_scroll');
    })

    $(document).on('click','.menu__link', function () {
        $('.menu').removeClass('show')
        $('.menu_toggle').removeClass('open')
        $('body, html').removeClass('no_scroll');
    })

    // sliders
    var swiper = new Swiper('.banner__slider', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.swiper-button-next'
        },
        on : {
            slideChange: function(i) {
                swiper.$el.find('.swiper-pagination-bullet').eq(swiper.realIndex).addClass('swiper-pagination-bullet-active')
                $('.banner__slider .swiper-pagination-bullet').eq(swiper.realIndex).siblings().removeClass('swiper-pagination-bullet-active')

                const id = swiper.$el.find('.swiper-slide').eq(swiper.activeIndex - 1).find('.youtube_player').attr('id')
                swiper.$el.find('.banner__control').removeClass('pause')

                if ( id !== undefined) {
                    console.log(id, swiper.activeIndex)
                    jQuery(`#${id}`).YTPPause()
                }
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
        autoplay: {
            delay: 3000,
        },
        on : {
            init: function (i) {
                $('.map__container .map__picker').eq(i.activeIndex + 1).fadeIn('fast').siblings('.map__picker_secondary').fadeOut('fast')
            },
            slideChange: function(i) {
                swiper2.$el.find('.swiper-pagination-bullet').eq(swiper2.realIndex).addClass('swiper-pagination-bullet-active')
                $('.map__slider .swiper-pagination-bullet').eq(swiper2.realIndex).siblings().removeClass('swiper-pagination-bullet-active')

                $('.map__container .map__picker').eq(swiper2.realIndex + 1).fadeIn('fast').siblings('.map__picker_secondary').fadeOut('fast')
            }
        }
    });

    var swiper3 = new Swiper('.apartments__slider', {
        pagination: {
          el: '.swiper-pagination3',
          type: 'progressbar'
        },
        autoplay: {
            delay: 3000,
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
        autoplay: {
            delay: 3000,
        },
        on : {
            slideChange: function(i) {
                swiper4.$el.find('.swiper-pagination-bullet').eq(swiper4.realIndex).addClass('swiper-pagination-bullet-active')
                $('.infrastructure__slider .swiper-pagination-bullet').eq(swiper4.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
            }
        }
    });

    var swiper5 = new Swiper('.team__slider', {
        slidesPerView: 4,
        spaceBetween: 50,
        // autoHeight: true,
        autoplay: {
            delay: 3000,
        },
        on : {
            init: function () {

                if($(window).width > 1180) {

                    const sliderOffset = $('.team__content').offset().left
                    $('.team__slider .swiper-slide').eq(0).css('margin-left', sliderOffset) 
                }
            }
        },
        breakpoints: {
            
            320: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,
                initialSlide: 1,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 50,
                centeredSlides: true,
                initialSlide: 1,
            },
            1024: {
                slidesPerView: 4,
                centeredSlides: false
            }
          }
    });

    var swiper6 = new Swiper('.progress__slider', {
        pagination: {
          el: '.swiper-pagination6',
          type: 'progressbar'
        },
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.progress__slider .swiper-button-next'
        },
        on : {
            slideChange: function(i) {
                swiper6.$el.find('.swiper-pagination-bullet').eq(swiper6.realIndex).addClass('swiper-pagination-bullet-active')
                $('.progress__slider .swiper-pagination-bullet').eq(swiper6.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
            }
        }
    });

    var swiper7 = new Swiper('.gallery__slider', {
        slidesPerView: 'auto',
        spaceBetween: 60,
        initialSlide: 1,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination7',
          type: 'progressbar'
        },
        navigation: {
            nextEl: '.gallery__slider .swiper-button-next'
        },
        on : {
            init: function (i) {
                i.$el.find('.swiper-pagination-bullet').eq(i.realIndex).addClass('swiper-pagination-bullet-active')
            },
            slideChange: function(i) {
                i.$el.find('.swiper-pagination-bullet').eq(i.realIndex).addClass('swiper-pagination-bullet-active')
                $('.gallery__slider .swiper-pagination-bullet').eq(i.realIndex).siblings().removeClass('swiper-pagination-bullet-active')
                
            },
            click: function (i) {
                if(i.clickedIndex === undefined) {
                    return
                }
                i.slideTo(i.clickedIndex)
            }
        },
        breakpoints: {
            
            320: {
                spaceBetween: 20
            },
            1024: {
                spaceBetween: 60
            }
          }
    });

    // $(document).on('click', '.gallery__slider ' function () {

    // })

    
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

    $(document).on('click', '.modal_form', function () {
        $('.popup--form').addClass('show')
    })

    // $(function() {
    
    //     var map = new google.maps.LatLng(46.4808562,30.7306394),
    //         pointToMoveTo, 
    //         first = true,
    //         curMarker = new google.maps.Marker({}),
    //         $el;
        
    //     var myOptions = {
    //         zoom: 16,
    //         center: map,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //       };
        
    //     var map = new google.maps.Map($("#map__container")[0], myOptions);
      
    //     $("#locations li").mouseenter(function() {
        
    //       $el = $(this);
                  
    //       if (!$el.hasClass("hover")) {
          
    //         $("#locations li").removeClass("hover");
    //         $el.addClass("hover");
          
    //         if (!first) { 
              
    //           // Clear current marker
    //           curMarker.setMap(); 
              
    //           // Set zoom back to map level
    //           // map.setZoom(10);
    //         }
            
    //         // Move (pan) map to new location
    //         pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
    //         map.panTo(pointToMoveTo);
            
    //         // Add new marker
    //         curMarker = new google.maps.Marker({
    //             position: pointToMoveTo,
    //             map: map,
    //             icon: "images/marker.png"
    //         });
            
    //         // On click, zoom map
    //         google.maps.event.addListener(curMarker, 'click', function() {
    //            map.setZoom(14);
    //         });
            
    //         // Fill more info area
    //         $("#more-info")
    //           .find("h2")
    //             .html($el.find("h3").html())
    //             .end()
    //           .find("p")
    //             .html($el.find(".longdesc").html());
            
    //         // No longer the first time through (re: marker clearing)        
    //         first = false; 
    //       }
          
    //     });
        
    //     $("#locations li:first").trigger("mouseenter");
        
    //   });
});

