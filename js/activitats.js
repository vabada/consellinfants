var current_slide = 1;
var years = ["1999-2000",
             "2000-2001",
             "2001-2002",
             "2002-2003",
             "2003-2004",
             "2004-2005",
             "2005-2006",
             "2006-2007",
             "2007-2008",
             "2008-2009",
             "2009-2010",
             "2010-2011",
             "2011-2012",
             "2012-2013",
             "2013-2014",
             ]


function resizeSlider(){
    var height = $(window).height();
    $('.slider').height(height * 0.9);
}

function gotoSlide(slide_number){
    
    if(slide_number < 1) slide_number = 15;
    if(slide_number > 15) slide_number = 1;
    
    console.log(current_slide);
    var background = "css/images/activitats/activitats-" + slide_number + ".png"
    $('.activitats-image').css('background-image', 'url('+background+')');

    var text = years[slide_number-1];
    $('.activitats-title').text(text);
       
    current_slide = slide_number;
}

function showImage(sel){
  gotoSlide(sel.value)
}

$('document').ready(resizeSlider);

$(window).resize(resizeSlider);

$('.glyphicon-menu-left').click(function(){
    gotoSlide(current_slide - 1);
});

$('.glyphicon-menu-right').click(function(){
    gotoSlide(current_slide + 1);
});

$('.hamburger').click(function(){
   $('.menu-bar').toggleClass('hidden-xs');
});



