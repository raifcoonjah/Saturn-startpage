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

determineGreet(new Date().getHours());

// Settings UI (alpha)
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
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

// Time....

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
