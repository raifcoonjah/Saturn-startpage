// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR.
// Open overlay menu
navy.addEventListener("click", openNav);
navyclose.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
