var current_slide = 1;
var texts = ["representa més de 5000 infants al municipi d'entre 0 i 16 anys",
             "ha participat en més de 40 actes públics",
             "posa a disposició de tots els infants la bústia de suggeriments, ara a Internet!",
             "va treballar la mobilitat segura en l'accés a les escoles del 2000 al 2002",
             "va fer difusió d'hàbits saludables l'any 2009-2010"];
         
var colors = ["#FF9900",
              "#99CCCC",
              "#990066",
              "#3366CC",
              "#9DC1BB"];

var interval = setInterval(function(){
    gotoSlide(current_slide + 1);
}, 4000);

function resizeSlider(){
    var height = $(window).height();
    $('.slider').height(height * 0.9);
}

function gotoSlide(slide_number){
    
    if(slide_number < 1) slide_number = 5;
    if(slide_number > 5) slide_number = 1;
    
    
    var background = "images/slideshow/slideshow-" + slide_number + ".png"
    var text = texts[slide_number-1];
    var color = colors[slide_number-1];
    
    var button_url = "quehemfet.html";
    var button_text ="Què ha fet el consell?";
    
    if(slide_number == 3){
        button_url = "bustia.html";
        button_text = "Bústia de suggeriments";
    }
    
    $(".slider .text").text(text);
    $(".slider .slider-button").attr('href', button_url);
    $(".slider .slider-button").text(button_text);
    $(".slider .slider-button").css('color', color);
    
    $('.slider .next-slide').css('background-image', 'url('+background+')');
    $('.slider .next-slide').css('background-color', color);
    //$('.header').css('background-color', color);
    
    $('.slider .glyphicon-menu-left').hide();
    $('.slider .glyphicon-menu-right').hide();

    $('.slider .slide').fadeOut(1000, function(){
        
        $('.slider .glyphicon-menu-left').show();
        $('.slider .glyphicon-menu-right').show();
        
        $('.slider .slide').css('background-image', 'url('+background+')');
        $('.slider .slide').css('background-color', color);
        $('.slider .slide').show();        
        
    });
    
    current_slide = slide_number;
}



$('document').ready(resizeSlider);

$(window).resize(resizeSlider);

$('.glyphicon-menu-left').click(function(){
    clearInterval(interval);
    gotoSlide(current_slide - 1);
});

$('.glyphicon-menu-right').click(function(){
    clearInterval(interval);
    gotoSlide(current_slide + 1);
});

$('.hamburger').click(function(){
   $('.menu-bar').toggleClass('hidden-xs');
});