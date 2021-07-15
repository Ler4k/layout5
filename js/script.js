$('.plans-slider').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        ]
});
$('.price-slider').slick({
    dots: false,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
]
});
