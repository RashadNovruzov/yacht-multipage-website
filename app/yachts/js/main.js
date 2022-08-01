

$(document).ready(function(){
    $('.burger').click(function () {
        $(".header__menu, .header__buttons").toggleClass('visible');
        $('body').toggleClass('hidden');
        $(this).toggleClass('rotate');

    })

    // alert(window.innerHeight);
    // flatpickr
    $(".form__date").flatpickr();




    // sliders in sidebar
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [0,3000],
        connect: true,
        range: {
            'min': 0,
            'max': 3000
        },
        tooltips: true,
        
    });
    // console.log(slider.noUiSlider.get());
    var price = $(".slider__number")[0];
    price.innerHTML = Math.floor(slider.noUiSlider.get()[0]) + " - " + Math.floor(slider.noUiSlider.get()[1]) + "$";
    $("#slider .noUi-touch-area").on("click",function(){
        price.innerHTML = Math.floor(slider.noUiSlider.get()[0]) + " - " + Math.floor(slider.noUiSlider.get()[1]) + "$";
    });

    
    var slider2 = document.getElementById('slider2');

    noUiSlider.create(slider2, {
        start: [100,3000],
        connect: true,
        range: {
            'min': 100,
            'max': 3000
        },
        tooltips: true,
        
        
    });
    // console.log(slider2.noUiSlider.get());
    var lenght = $(".slider__lenght")[0];
    lenght.innerHTML = Math.floor(slider2.noUiSlider.get()[0]) + " - " + Math.floor(slider2.noUiSlider.get()[1]) + "m";
    $("#slider2").on("click",function(){
        lenght.innerHTML = Math.floor(slider2.noUiSlider.get()[0]) + " - " + Math.floor(slider2.noUiSlider.get()[1]) + "m";
    })

    // Number of guests
    var plus = $("#plus");
    var minus = $("#minus");

    plus.click(function(){
        minus.css('display','inline-block');
        var number = Math.floor($("#numbers__input").attr('value'));
        number+=1;
        $("#numbers__input").attr('value',number.toString()); 
    })

    minus.click(function(){
        var number = Math.floor($("#numbers__input").attr('value'));
        number-=1;
        if(number<=0){
            $("#numbers__input").attr('value',0);
            $(this).css('display','none')
        }else{
            $("#numbers__input").attr('value',number.toString()); 
        }
        
    })


    // number of bedrooms
    var b_plus = $("#b-plus");
    var b_minus = $("#b-minus");

    b_plus.click(function(){
        b_minus.css('display','inline-block');
        var b_number = Math.floor($("#bedrooms__input").attr('value'));
        b_number+=1;
        $("#bedrooms__input").attr('value',b_number.toString()); 
    })

    b_minus.click(function(){
        var b_number = Math.floor($("#bedrooms__input").attr('value'));
        b_number-=1;
        if(b_number<=0){
            $("#bedrooms__input").attr('value',0);
            $(this).css('display','none')
        }else{
            $("#bedrooms__input").attr('value',b_number.toString()); 
        }
        
    })
    
    $(".more__filter").on('click',function(){
        $(".sidebar").toggleClass("filter__visible");
    })

    $(".line").on("click",function(){
        if($( ".sidebar" ).hasClass( "filter__visible" )){
            $(".sidebar").removeClass("filter__visible");
        }
    })
   
})



