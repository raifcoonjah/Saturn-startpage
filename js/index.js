const determineGreet = (
  hours // Good morning/night text.
) =>
  (document.getElementById("greetings").innerText = `Good ${
    hours < 12
      ? "morning! "
      : hours < 18
      ? "afternoon! "
      : hours < 21 // After 21:00/9:00 display night instead.
      ? "evening! "
      : "night! "
  } `);

// Get month:
determineGreet(new Date().getHours());

// Settings/Modal trigger + close button.
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".button-modal");
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

// Time v2.0
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  );
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    cmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return " " + cday + " " + cnum + " " + cmonth;
}
// Set up the clock and date
document.getElementById("time").innerHTML =
  `It's ` + getDate() + `, ` + getTime();

// Open overlay menu
navy.addEventListener("click", openNav);
navyclose.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// Hide favorites, jQuery.

$(function () {
  var status = localStorage.getItem("favorites_hidden");
  if (status == "true") {
    $(".fav-container").css("display", "none");
    $(".AvGamesCheckBox_favo_compl").attr("checked", true);
  } else {
    $(".fav-container").css("display", "block");
    $(".AvGamesCheckBox_favo_compl").attr("checked", false);
  }
  $(".AvGamesCheckBox_favo_compl").click(function () {
    if (this.checked) {
      $(".fav-container").hide();
    } else {
      $(".fav-container").show();
    }
    localStorage.setItem("favorites_hidden", this.checked);
  });
});

// Hide App row .2

$(function () {
  var status = localStorage.getItem("apps_row2_hidden");
  if (status == "true") {
    $(".apps_row2").css("display", "none");
    $(".AvGamesCheckBox_apps_row2").attr("checked", true);
  } else {
    $(".apps_row2").css("display", "block");
    $(".AvGamesCheckBox_apps_row2").attr("checked", false);
  }
  $(".AvGamesCheckBox_apps_row2").click(function () {
    if (this.checked) {
      $(".apps_row2").hide();
    } else {
      $(".apps_row2").show();
    }
    localStorage.setItem("apps_row2_hidden", this.checked);
  });
});

// Settings Navigation.
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
