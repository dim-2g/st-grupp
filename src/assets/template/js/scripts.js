$(function() {
    popularSlider = function(){
        $('.popular__list').not('.slick-initialized').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            infinite: true
        });
    };
    popularSlider();


    $('.product-previews__item').mouseover(function(){
        $('.product-previews__item').removeClass('active');
        $('.product-photos__image').attr('src', $(this).data('src'));
        $(this).addClass('active');
    });


    setHeightHeader = function(){
        var section_menu = $('.section-menu__wrap');
        var menu_height = section_menu.outerHeight();
        section_menu.css({'min-height':menu_height});
    }
    setHeightHeader();


    setFixedHeader = function(){
        var header = $('.section-menu');
        var header_relative = $('.section-menu').not('.slideTop');

        if (header_relative.length>0){
            relative_bottom = header_relative.offset().top + header_relative.outerHeight();
            relative_top = header_relative.offset().top;
        }else{
            if (!relative_bottom){
                relative_bottom = 0;
            }
            if (!relative_top){
                relative_top = 0;
            }
        }
        var scroll = $(window).scrollTop();
        //чтобы плавно выезжал
        if (relative_bottom<scroll) {
            header.addClass('slideTop');
            setTimeout(function(){
                $('body').addClass('fixed-header');
            });
        }
        if (relative_top>scroll) {
            $('body').removeClass('fixed-header');
            header.removeClass('slideTop');
        }

    };


    $(document).scroll(function(){
        setFixedHeader();
    });

});