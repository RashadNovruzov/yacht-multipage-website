$(document).ready(function () {
    $('.burger').click(function () {
        $(".header__menu, .header__buttons").toggleClass('visible');
        $('body').toggleClass('hidden');
        $(this).toggleClass('rotate');

    })
    $('#discover__date').flatpickr();


    $(".slider").slick({
        speed: 300,
        slidesToShow: 3.8,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 1295,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3.2,
                }
            },
            {
                breakpoint: 1056,
                settings: {
                    slidesToShow: 3.8,
                }
            },
            
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".blog__items").slick({
        arrows:false,
        slidesToShow:4,
        dots:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.9,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.4,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
});
