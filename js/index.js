const determineGreet = (
  hours // Good morning/night text.
) =>
  (document.getElementById("greetings").innerText = `Good ${
    hours < 12
      ? "morning! "
      : hours < 18
      ? "afternoon! "
      : hours < 23 // After 11pm switch to night instead of evening.
      ? "evening! "
      : "night! "
  } `);

// Get month:
const monthNames = [
  "Jan",
  "Febr",
  "Marc",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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

// Add zero infront

// Date text
var currentdate = new Date();
var datetime =
  " It's " +
  days[currentdate.getDay()] +
  " " +
  monthNames[currentdate.getMonth()] +
  " " +
  currentdate.getDate() +
  ", " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes();

document.getElementById("time").innerHTML = datetime;
document.write;

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
