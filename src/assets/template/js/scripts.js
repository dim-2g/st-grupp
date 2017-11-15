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
});