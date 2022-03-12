// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR

var livepreview = document.getElementById("title");

livepreview.onkeyup = function () {
  document.getElementById("livepreview").innerHTML = livepreview.value;
};
