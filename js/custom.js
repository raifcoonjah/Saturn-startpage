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

