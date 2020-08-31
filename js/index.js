var username = "John Doe!"; /*Change this with your name*/

const determineGreet = (hours) =>
  (document.getElementById("greetings").innerText = `Good ${
    hours < 12
      ? "morning, "
      : hours < 18
      ? "afternoon, "
      : hours < 23
      ? "evening, "
      : "night, "
  } ${username}!`);

determineGreet(new Date().getHours());

// Settings UI (alpha)
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".btn-hide2");
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

function formatAMPM(date) {
  // get time in 12hr format
  var hours = date.getHours();
  var ampm = hours >= 12 ? " PM" : " AM";
  var strTime = ampm;
  return strTime;
}

document.getElementById("time").innerHTML = datetime + formatAMPM(new Date());

/// Show/Hide
function myFunction() {
  var x = document.getElementById("apps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
