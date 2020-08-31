// Image boom boom, switches between different images with each reload.
// v0.1.1

// Rotate Images using Mafs.
var theImages = new Array();
theImages[0] = "./img/1-min.png";
theImages[1] = "./img/2-min.png";
theImages[2] = "./img/3-min.png";
var j = 0;
var p = theImages.length;
var preBuffer = new Array();

for (i = 1; i < p; i++) {
  preBuffer[i] = new Image();
  preBuffer[i].src = theImages[i];
}
var whichImage = Math.round(Math.random() * (p - 1));

function showImage() {
  document.getElementById("headerimg").src = theImages[whichImage];
}

//call the function
showImage();
