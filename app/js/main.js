$(document).ready(function(){
    $('.burger').click(function () {
        $(".header__menu, .header__buttons").toggleClass('visible');
        $('body').css('overflow','hidden');
    })    
});