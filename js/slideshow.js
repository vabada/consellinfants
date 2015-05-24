var slide = 0
var slides = ["images/slideshow/slideshow-1.png",
              "images/slideshow/slideshow-2.png",
              "images/slideshow/slideshow-3.png",
              //"images/slideshow/slideshow-4.png",
              "images/slideshow/slideshow-5.png",
              "images/slideshow/slideshow-6.png"];

var texts = ["representa més de 5000 infants al municipi d'entre 0 i 16 anys",
             "ha participat en més de 40 actes públics",
             "posa a disposició de tots els infants la bústia de suggeriments, ara a Internet!",
             //"i la participació al municipi des de 1997",
             "va treballar la mobilitat segura en l'accés a les escoles del 2000 al 2002",
             "va fer difusió d'hàbits saludables l'any 2009-2010"];

var links = ['<a href="quehemfet.html">Què ha fet el consell?</a>',
             '<a href="quehemfet.html">Què ha fet el consell?</a>',
             '<a href="bustia.html">Bùstia de suggeriments</a>',
             //'<a href="quehemfet.html">Què ha fet el consell?</a>',
             '<a href="quehemfet.html">Què ha fet el consell?</a>',
             '<a href="quehemfet.html">Què ha fet el consell?</a>',];

var colors = ["#F19004",
              "#9DC1BB",
              "#AA1258",
              //"#9DC1BB",
              "#1D70B7",
              "#9DC1BB"];

var change = function() {
    if (slide >= 5)
        slide = 0
    
    element = document.getElementById("slide");
    element.src=slides[slide]
    text = document.getElementById("text-change");
    text.innerHTML = texts[slide]
    link = document.getElementById("text-button");
    link.innerHTML = links[slide]
    link.style.color = colors[slide]
    slide++;
}

setInterval(function(){change();}, 4000);