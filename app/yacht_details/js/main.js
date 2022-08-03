$(document).ready(function(){
    $('.burger').click(function () {
        $(".header__menu, .header__buttons").toggleClass('visible');
        $('body').toggleClass('hidden');
        $(this).toggleClass('rotate');

    })

    $(".info__description-more").click(function(){
        $(".info__description-body").toggleClass("more-txt");
    })

    $("#start").flatpickr();
    $("#start-2").flatpickr();

    $(".pop-up__form").click(function(){
        $(".info__right").toggleClass("pop-up");
        $('body').toggleClass('hidden'); 
    })

    $(".similar__items").slick({
        speed: 300,
        slidesToShow: 3.3,
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
                    slidesToShow: 3,
                }
            },
            
            
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})