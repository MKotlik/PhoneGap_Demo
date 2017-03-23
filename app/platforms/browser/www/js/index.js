var getInfoButton = document.getElementById("get-info");
var infoBox = document.getElementById("info-box");
var getAccelButton = document.getElementById("get-accel");
var accelBox = document.getElementById("accel-info");
var watchid = -1;

function vibrateOnClick(e) {
    console.log("vibed");

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

function getAccelerometer(acceleration) {
    console.log("getting accel info");
    var innerText = "X: " + acceleration.x + "<br/>Y: " + acceleration.y;
    innerText += "<br/>Z: " + acceleration.z + "<br/>Timestamp: " + acceleration.timestamp;
    accelBox.innerHTML = innerText;
    infoBox.style.backgroundColor = "#C6DEA6";
}

function accelerometerError() {
    accelBox.innerHTML = "Couldn't get position data";
}

var accelClick = function() {
    console.log("accel clicked");
    console.log(watchid);
    if (watchid == -1) {
        accelBox.innerHTML = "Reading Data";
        getAccelButton.innerHTML = "Stop Reading";
        watchid = navigator.accelerometer.watchAcceleration(getAccelerometer, accelerometerError, {
            frequency: 1000
        });
    } else {
        navigator.accelerometer.clearWatch(watchid);
        accelBox.innerHTML = "Idle";
        getAccelButton.innerHTML = "Get Acceleration";
        watchid = -1;
    }
};

/*
function getMotion() {
    accelBox.innerHTML = "stage 1";
    navigator.accelerometer.getCurrentAcceleration(getAccelerometer, accelerometerError);
}

setInterval(getMotion, 1000);
*/

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    getInfoButton.addEventListener("click", vibrateOnClick, false);
    getAccelButton.addEventListener("click", accelClick, false);
}

//accelBox.addEventListener("click", getMotion, false);
