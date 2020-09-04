var username = "John Doe";

const determineGreet = (
  hours // Good morning/night text.
) =>
  (document.getElementById("greetings").innerText = `Good ${
    hours < 12
      ? "morning, "
      : hours < 18
      ? "afternoon, "
      : hours < 23 // After 11pm switch to night instead of evening.
      ? "evening, "
      : "night, "
  } ${username}!`);

determineGreet(new Date().getHours());

// Settings/Modal trigger + close button.
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".btn-modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Date text
var currentdate = new Date();
var datetime =
  "It's the " +
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " at " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes();

// PM and AM after time.

function formatAMPM(date) {
  // get time in 12hr format
  var hours = date.getHours();
  var ampm = hours >= 12 ? " PM" : " AM";
  var strTime = ampm;
  return strTime;
}

document.getElementById("time").innerHTML = datetime + formatAMPM(new Date());

// Dark mode Switch. Light > Dark | Dark < light
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
