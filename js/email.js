function sendEmail(email){
  $('#darkenBackground').css('visibility', 'visible');
  console.log("hola")
  //alert("Felicitats, hem rebut el teu comentari!")
}

//This is the function that closes the pop-up
function endBlackout(){
$(".blackout").css("display", "none");
$(".msgbox").css("display", "none");
}

//This is the function that starts the pop-up
function strtBlackout(){
$(".msgbox").css("display", "block");
$(".blackout").css("display", "block");
}

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function(){
$("#btn1").click(strtBlackout); // open if btn is pressed
$(".blackout").click(endBlackout); // close if click outside of popup
$(".closeBox").click(endBlackout); // close if close btn clicked

// Automatically trigger the pop-up after 10 seconds
});