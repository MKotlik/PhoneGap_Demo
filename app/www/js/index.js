var getInfoButton = document.getElementById("get-info");
var infoBox = document.getElementById("info-box");
var accelBox = document.getElementById("accel-info");

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

    var infoStr = "Model: " + model + "<br/>Platform: " + platform + "<br/>Manufacturer: ";
    infoStr += manufacturer + "<br/>Version: " + version;
    infoBox.innerHTML = infoStr;

    infoBox.style.backgroundColor = "#C6DEA6";
}

function getMotion() {
    accelBox.innerHTML = "stage 1";
    navigator.accelerometer.getCurrentAcceleration(getAccelerometer, accelerometerError);
}

function getAccelerometer(acceleration) {
    accelBox.innerHTML = "stage 2";
    var innerText = "X: " + acceleration.x + "<br/>Y: " + acceleration.y;
    innerText += "<br/>Z: " + acceleration.z + "<br/>Timestamp: " + acceleration.timestamp;
    accelBox.innerHTML = innerText;
}

function accelerometerError() {
    accelBox.innerHTML = "Couldn't get position data";
}

getInfoButton.addEventListener("click", vibrateOnClick, false);
accelBox.addEventListener("click", getMotion, false);

setInterval(getMotion, 1000);
