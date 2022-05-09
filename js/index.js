//
// ========
// + Good Morning text +
// ========
//
const determineGreet = (hours) =>
  (document.getElementById("good_morning").innerText =
    `Good ${
      hours < 12
        ? "morning, "
        : hours < 18
        ? "afternoon, "
        : hours < 21
        ? "evening, "
        : "night, "
    } ` +
    localStorage.getItem("user") +
    `.`);

// Get month:
determineGreet(new Date().getHours());

//
// ========
// + Settings Modal trigger + close button +
// ========
//

var modal = document.querySelector(".settings_modal");
var trigger = document.querySelector(".setting-button");
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

//
// ========
// + Background sounds + close-button +
//

var soundsModal = document.querySelector(".sounds_modal");
var SBtntrigger = document.querySelector(".sounds-button");
var closeSoundsButton = document.querySelector(".close-sounds");

function toggleSounds() {
  soundsModal.classList.toggle("show-sounds-modal");
}
function windowOutclick(event) {
  if (event.target === soundsModal) {
    toggleSounds();
  }
}
SBtntrigger.addEventListener("click", toggleSounds);
closeSoundsButton.addEventListener("click", toggleSounds);
window.addEventListener("click", windowOutclick);

//
// ========
// + Time and month text +
// ========
//
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" +
    (hour < 10 ? "0" + hour : hour) +
    "<span>:</span>" +
    (min < 10 ? "0" + min : min)
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
    days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    cday = days[date.getDay()],
    cnum = date.getDate();
  if (cnum < 10) {
    cnum = "0" + cnum;
  }
  return " " + cday + " " + cnum + " " + cmonth;
}
// Set up the clock and date
document.getElementById("time").innerHTML = getDate() + `, ` + getTime();

// Reload time after a certain amount of time [BETA, testing tbh]
setInterval(() => {
  document.getElementById("time").innerHTML = getDate() + `, ` + getTime();
}, 60 * 1000);

//
// ========
// + Hide Favorites feature +
// ========
//

$(function () {
  var status = localStorage.getItem("favorites_hidden");
  if (status == "true") {
    $(".fav-container").css("display", "none");
    $(".hide-favorite").attr("checked", true);
  } else {
    $(".fav-container").css("display", "block");
    $(".hide-favorite").attr("checked", false);
  }
  $(".hide-favorite").click(function () {
    if (this.checked) {
      $(".fav-container").hide();
    } else {
      $(".fav-container").show();
    }
    localStorage.setItem("favorites_hidden", this.checked);
  });
});

//
// ========
// + Hide searchbar +
// ========
//
$(function () {
  var status = localStorage.getItem("search_hidden");
  if (status == "true") {
    $(".search_block").css("display", "none");
    $(".hide-search").attr("checked", true);
  } else {
    $(".search_block").css("display", "block");
    $(".hide-search").attr("checked", false);
  }
  $(".hide-search").click(function () {
    if (this.checked) {
      $(".search_block").hide();
    } else {
      $(".search_block").show();
    }
    localStorage.setItem("search_hidden", this.checked);
  });
});
//
// ========
// + Hide Calendar Button +
// ========
//
$(function () {
  var status = localStorage.getItem("hide-calendar-btn");
  if (status == "true") {
    $(".calendar-btn").css("display", "none");
    $(".hide-apps-list").attr("checked", true);
  } else {
    $(".calendar-btn").css("display", "block");
    $(".hide-calendar-btn").attr("checked", false);
  }
  $(".hide-calendar-btn").click(function () {
    if (this.checked) {
      $(".calendar-btn").hide();
    } else {
      $(".calendar-btn").show();
    }
    localStorage.setItem("hide-calendar-btn", this.checked);
  });
});

//
// ========
// + Settings navigation +
// ========
//

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// Esc to close settings and favModal
$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    $(".settings_modal").removeClass("show-modal");
    // click on cancel-fav-btn
    $(".cancel-fav-btn").click();
    // unfocus search-bar
    $(".search-bar").blur();
  }
});

//
// ========
// + Apps Shortcut +
// ========
//

// Ctrl + Alt + G to open github.com
$(document).keyup(function (github) {
  if (github.keyCode == 71 && github.altKey && github.ctrlKey) {
    window.location.replace("https://github.com");
  }
});

// Ctrl + Alt + Y to open youtube.com
$(document).keyup(function (youtube) {
  if (youtube.keyCode == 89 && youtube.altKey && youtube.ctrlKey) {
    window.location.replace("https://youtube.com");
  }
});

// Ctrl + Alt + R to open reddit.com
$(document).keyup(function (reddit) {
  if (reddit.keyCode == 82 && reddit.altKey && reddit.ctrlKey) {
    window.location.replace("https://reddit.com");
  }
});

// Ctrl + Alt + P to open protonmail.com
$(document).keyup(function (protonmail) {
  if (protonmail.keyCode == 80 && protonmail.altKey && protonmail.ctrlKey) {
    window.location.replace("https://mail.protonmail.com");
  }
});

// Ctrl + Alt + T to open twitter.com
$(document).keyup(function (twitter) {
  if (twitter.keyCode == 84 && twitter.altKey && twitter.ctrlKey) {
    window.location.replace("https://twitter.com");
  }
});

// Ctrl + Alt + T to open twitter.com
$(document).keyup(function (google_calendar) {
  if (
    google_calendar.keyCode == 67 &&
    google_calendar.altKey &&
    google_calendar.ctrlKey
  ) {
    window.location.replace("https://calendar.google.com");
  }
});

// Ctrl + Alt + M to open mail.google.com
$(document).keyup(function (google_mail) {
  if (google_mail.keyCode == 77 && google_mail.altKey && google_mail.ctrlKey) {
    window.location.replace("https://mail.google.com");
  }
});

// Ctrl + / to focus on searchbar
$(document).keyup(function (search) {
  if (search.keyCode == 191 && search.ctrlKey) {
    $(".search-bar").focus();
  }
});

// Ctrl + ArrowUp to click on se_icon
$(document).keyup(function (se_icon) {
  if (se_icon.keyCode == 38 && se_icon.ctrlKey) {
    $(".se_icon").click();
  }
});

// Ctrl + Alt + I to open instagram.com
$(document).keyup(function (instagram) {
  if (instagram.keyCode == 73 && instagram.altKey && instagram.ctrlKey) {
    window.location.replace("https://instagram.com");
  }
});

// Shift + B to open soundboard

//
// ========
// + App list category +
// ========
//
$(document).ready(function () {
  $("ul.apps-category li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.apps-category li").removeClass("current");
    $(".app-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

//
// ========
// + *New* Username feature +
// ========
//

$(document).ready(function () {
  $("#save").click(function () {
    var username = $("#userSet").val();
    if (typeof Storage !== "undefined") {
      localStorage.user = username;
      $("#save").text("↻ Saved, reloading..");
      $("#Uname").val(localStorage.getItem("user"));
      setTimeout(function () {
        window.location.reload(1);
      }, 2000);
      if (localStorage.getItem("user") == "") {
        $("#userSet").attr(
          "placeholder",
          "Using default username, as input field is empty.."
        );
        $("#userSet").css("border", "1px solid var(--delete-warning-bg)");
        localStorage.user = "null";
      }
    } else {
      $("#Uname").val("Sorry, your browser does not support Web Storage..");
    }
  });
});

// Saturn Soundboard
// v1.0

var rainefffect = document.getElementById("raineffect");
var fireplace = document.getElementById("fireplace");
var waves = document.getElementById("waves");
rainefffect.loop = true;
fireplace.loop = true;
waves.loop = true;

// rain effect

$("#play").click(function () {
  if (rainefffect.paused) {
    rainefffect.volume = 0.1;
    rainefffect.play();
    $("#play").addClass("pause");
  } else {
    rainefffect.pause();
    $("#play").removeClass("pause");
  }
});

// fireplace effect

$("#play-fireplace").click(function () {
  if (fireplace.paused) {
    fireplace.volume = 0.1;
    fireplace.play();
    $("#play-fireplace").addClass("pause");
  } else {
    fireplace.pause();
    $("#play-fireplace").removeClass("pause");
  }
});

// waves effect
$("#play-waves").click(function () {
  if (waves.paused) {
    waves.volume = 0.1;
    waves.play();
    $("#play-waves").addClass("pause");
  } else {
    waves.pause();
    $("#play-waves").removeClass("pause");
  }
});

// button-increase volume
$("#volume-increase").click(function () {
  rainefffect.volume += 0.1;
  fireplace.volume += 0.1;
  waves.volume += 0.1;
});

// button-decrease to decrease volume
$("#volume-decrease").click(function () {
  rainefffect.volume -= 0.1;
  fireplace.volume -= 0.1;
  waves.volume -= 0.1;
});
