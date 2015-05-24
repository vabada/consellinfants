$('.hamburger').click(function(){
   $('.menu-bar').toggleClass('hidden-xs');
   
});

function resizeSlider(){
    var height = $(window).height();
    $('.slider').height(height * 0.75);
}

$('document').ready(resizeSlider);

$(window).resize(resizeSlider);