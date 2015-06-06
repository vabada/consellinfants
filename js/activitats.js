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
var encarrecs = [
    [1, "1999-2000", "Estudi dels espais de joc (i)", "Oci i temps lliure"],
    [2, "2000-2001", "Planificació de l'Estudi dels itineraris escolars(i)", "Seguretat"],
    [3, "2001-2002", "Planificació de l'Estudi dels itineraris escolars(ii)", "Seguretat"],
    [4, "2002-2003", "Els espais de lleure i d'oci pels infants i adolescents de dotze a setze anys", "Oci i temps lliure"],
    [5, "2003-2004", "Els espais de lleure i d'oci pels infants i adolescents de dotze a setze anys", "Oci i temps lliure"],
    [6, "2004-2005", "Disseny de la plaça del costat del c/ Jaume Ribas", "Urbanisme"],
    [7, "2005-2006", "Disseny de la plaça del costat del c/ Jaume Ribas", "Urbanisme"],
    [8, "2006-2007", "La millora de les eines de comunicació del consell d'Infants (1ª fase)", "Comunicació"],
    [9, "2007-2008", "La millora de les eines de comunicació del consell d'Infants (2ª fase)", "Comunicació"],
    [10, "2008-2009", "Donar a conèixer a la ciutadania de Sant Feliu de Llobregat la Convenció dels Drets dels Infants", "Comunicació"],
    [11, "2009-2010", "Difusió dels hàbits saludables", "Salut"],
    [12, "2010-2011", "Activitats pels nens del centre cívic", "Oci i temps lliure"],
    [13, "2011-2012", "Promoció de la Cultura popular del municipi", "Cultura i tradicions"],
    [14, "2012-2013", "Repensar el Consell d'Infants", "Comunicació"],
    [15, "2013-2014", "Reforma del Parc Llobregat", "Urbanisme"]
];

var ambits = [
    "Seguretat",
    "Oci i temps lliure",
    "Urbanisme",
    "Comunicació",
    "Salut",
    "Cultura i tradicions",
]

function filter(type, sel){
    var later;
    //console.log(type, sel.value);
    $(".encarrecs-texts").empty();
    if (type == "ambit"){
        for (var i = 0; i< encarrecs.length ; i++){
            if (encarrecs[i][3] == ambits[sel.value-1]){
                text = encarrecs[i][1] +" "+encarrecs[i][2];
                $(".encarrecs-texts").append( "<p>"+text+"</p><hr class='hr_activitats'>"  ); 
            }
        }
        console.log(ambits[sel.value-1])
    }
    if (type == "anys"){
        //console.log(years[sel.value-1])
        for (var i = 0; i< encarrecs.length ; i++){
            if (encarrecs[i][1] == years[sel.value-1]){
                text = encarrecs[i][1] +" "+encarrecs[i][2];
            }
        }
        $(".encarrecs-texts").append( "<p>"+text+"</p><hr class='hr_activitats'>" );
        setTimeout(function(){ later=$(".encarrecs-texts").height();console.log('after', $(".encarrecs-texts").height()); }, 0);
        $(".encarrecs-texts").height(later)
    }
}

function resizeSlider(){
    var height = $(window).height();
    $('.slider').height(height * 0.9);
}

function gotoSlide(slide_number){
    
    if(slide_number < 1) slide_number = 15;
    if(slide_number > 15) slide_number = 1;
    
    console.log(current_slide);
    var background = "images/activitats/activitats-" + slide_number + ".png"
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



