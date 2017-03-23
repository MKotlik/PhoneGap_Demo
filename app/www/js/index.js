var getInfoButton = document.getElementById("get-info");
var infoBox = document.getElementById("info-box");

function vibrateOnClick(e) {
    e.preventDefault();
    console.log("clicked");
    navigator.vibrate(500); //Vibrate for 0.5 seconds
}

getInfoButton.addEventListener("click", vibrateOnClick, false);
