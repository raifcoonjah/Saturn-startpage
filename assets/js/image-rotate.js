// Uses javascript to switch between different images.
// v0.3

var images = [
  "./assets/img/1.svg",
  "./assets/img/2.svg",
  "./assets/img/3.svg",
  "./assets/img/4.svg",
  "./assets/img/6.svg",
  "./assets/img/7.svg",
  "./assets/img/8.svg",
  "./assets/img/10.svg",
  "./assets/img/11.svg",
  "./assets/img/12.svg",
  "./assets/img/14.svg",
  "./assets/img/15.svg",
  "./assets/img/16.svg",
  "./assets/img/17.svg",
  "./assets/img/18.svg",
  "./assets/img/19.svg",
  "./assets/img/20.svg",
  "./assets/img/21.svg",
  "./assets/img/22.svg",
  "./assets/img/23.svg",
  "./assets/img/24.svg",
  "./assets/img/25.svg",
  "./assets/img/26.svg",
  "./assets/img/27.svg",
  "./assets/img/28.svg",
  "./assets/img/29.svg",
  "./assets/img/30.svg",
];

function randImg() {
  var size = images.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("headerimg").src = images[x];
}

randImg();
