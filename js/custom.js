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

// Get the favModal
var favModal = document.getElementById("favModal");

// Get the button that opens the favModal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the favModal
var span = document.getElementsByClassName("cancel-fav-btn", "close")[0];

// When the user clicks on the button, open the favModal
btn.onclick = function () {
  favModal.style.display = "block";
};

// When the user clicks on <span> (x), close the favModal
span.onclick = function () {
  favModal.style.display = "none";
};

// When the user clicks anywhere outside of the favModal, close it
window.onclick = function (event) {
  if (event.target == favModal) {
    favModal.style.display = "none";
  }
};

$(document).ready(function () {
  $("#add").click(function () {
    $("#sv-msg2").text("🕺 Your new favorite has been saved sucessfully. ");
  });
});
