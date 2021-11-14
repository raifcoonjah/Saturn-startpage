// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR.

// Keyboard shortcuts

var opnSetting = document.querySelector(".close-button");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 27) {
    // Esc
    opnSetting.click();
  }
});

var openNavy = document.querySelector("#navyclose");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 188) {
    // ,
    openNavy.click();
  }
});

var closeNavy = document.querySelector("#navy");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 190) {
    // .
    closeNavy.click();
  }
});
