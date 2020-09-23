// Uses javascript to switch between 3 different images.
// v0.2

var images = [
  "./img/1.svg",
  "./img/2.svg",
  "./img/3.svg",
  "./img/4.svg",
  "./img/6.svg",
  "./img/7.svg",
  "./img/8.svg",
  "./img/10.svg",
  "./img/11.svg",
  "./img/12.svg",
  "./img/14.svg",
  "./img/15.svg",
  "./img/16.svg",
  "./img/17.svg",
  "./img/18.svg",
  "./img/19.svg",
  "./img/20.svg",
  "./img/21.svg",
];

function randImg() {
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("headerimg").src = images[x];
}

randImg();
