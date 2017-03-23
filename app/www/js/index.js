var getInfoButton = document.getElementById("get-info");
var infoBox = document.getElementById("info-box");

/* var serverButton = document.createElement("button");
serverButton.setAttribute("type", "button");
serverButton.setAttribute("id", "push-server");
serverButton.setAttribute("name", "push-server");
serverButton.innerHTML = "Send to Server"; */

function vibrateOnClick(e) {
    console.log("clicked");

    navigator.vibrate(500); //Vibrate for 0.5 seconds

    var model = device.model;
    var platform = device.platform;
    var manufacturer = device.manufacturer;
    var version = device.version;

    infoStr = "Model: " + model + "<br/>Platform: " + platform + "<br/>Manufacturer: ";
    infoStr += manufacturer + "<br/>Version: " + version;
    infoBox.innerHTML = infoStr;

    infoBox.style.backgroundColor = "#C6DEA6";
}

getInfoButton.addEventListener("click", vibrateOnClick, false);
