var getInfoButton = document.getElementById("get-info");
var infoBox = document.getElementById("info-box");

var onClick = function(e) {
  console.log("clicked");
  navigator.vibrate(500); //Vibrate for 0.5 seconds
};

getInfoButton.addEventListener("click", onClick);
