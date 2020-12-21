// Use javascript to switch between different images.
// v0.4

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
  "./img/22.svg",
  "./img/23.svg",
  "./img/24.svg",
  "./img/25.svg",
  "./img/26.svg",
  "./img/27.svg",
  "./img/28.svg",
  "./img/29.svg",
  "./img/30.svg",
];

function randImg() {
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("headerimg").src = images[x];
}

randImg();
