$(document).ready(function(){
    $('.burger').click(function () {
        $(".header__menu, .header__buttons").toggleClass('visible');
        $('body').toggleClass('hidden');
        $(this).toggleClass('rotate');

    })

    // alert(window.innerHeight);
    $(".form__date").flatpickr();


    $('.s-label').click(function(){
        $(this).next('.select-wrapper').find('.form__select').filter(":selected");
    })
})