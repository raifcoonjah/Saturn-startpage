var username = "John Doe"; /*Change this with your name*/

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

var currentdate = new Date();
var datetime =
  "It's: " +
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
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? " PM" : " AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = ampm;
  return strTime;
}

document.getElementById("time").innerHTML = datetime + formatAMPM(new Date());
