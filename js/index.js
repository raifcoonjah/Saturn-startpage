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

function formatAMPM(date) {
  // get time in 12hr format
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

setInterval(function () {
  // update the time
  main();
}, 1000);
main();
function main() {
  // adds the data to the text
  document.getElementById("time").innerHTML = `It's ` + formatAMPM(new Date());
}

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
