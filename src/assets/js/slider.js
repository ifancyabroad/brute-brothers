$(function () {
    $('.review-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        dotsClass: 'custom-dots',
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});