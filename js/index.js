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

// Background wallpaper modal
var wallpaperModal = document.querySelector(".wallpaper_modal");
var wallpaperButton = document.getElementById("wallpaper-button");
var closeWallpaperButton = document.querySelector(".close-wallpaper");

function toggleWallpaper() {
  wallpaperModal.classList.toggle("show-wallpaper-modal");
}

function windowOutclick3(event) {
  if (event.target === wallpaperModal) {
    toggleWallpaper();
  }
}

wallpaperButton.addEventListener("click", toggleWallpaper);
closeWallpaperButton.addEventListener("click", toggleWallpaper);
window.addEventListener("click", windowOutclick3);

// Favorites modal
var favModal = document.querySelector(".fav_modal");
var FavBtntrigger = document.querySelector(".favorite-button");
var closeFavoritesButton = document.querySelector(".cancel-fav-btn");

function toggleFavorites() {
  favModal.classList.toggle("show-favorite-modal");
}

function windowOutclick2(event) {
  if (event.target === favModal) {
    toggleFavorites();
  }
}

FavBtntrigger.addEventListener("click", toggleFavorites);
closeFavoritesButton.addEventListener("click", toggleFavorites);
window.addEventListener("click", windowOutclick2);

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

// ========
// + Keyboard Shortcuts +
// Refactoring:
// rewrite everything over to vanilla JS.
// ========
//

var opnSetting = document.querySelector(".close-button");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 83 && event.shiftKey) {
    // Shift + S key
    opnSetting.click();
  }
});

// when ESC is pressed close the modal in vanilla js
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    // remove settings_modal class in vanilla js
    document.querySelector(".settings_modal").classList.remove("show-modal");
    // remove fav_modal class in vanilla js
    document
      .querySelector(".fav_modal")
      .classList.remove("show-favorite-modal");
    // remove sounds_modal class in vanilla js
    document
      .querySelector(".sounds_modal")
      .classList.remove("show-sounds-modal");
    // remove wallpaper_modal class in vanilla js
    document
      .querySelector(".wallpaper_modal")
      .classList.remove("show-wallpaper-modal");
    // unfocus search-bar
    document.querySelector(".search-bar").blur();
  }
});

//
// ========
// + Apps Shortcut +
// ========
//

// Ctrl + Alt + G to open github.com
document.addEventListener("keyup", function (github) {
  if (github.key == "g" && github.altKey && github.ctrlKey) {
    window.location.replace("https://github.com");
  }
});

// Ctrl + Alt + Y to open youtube.com
document.addEventListener("keyup", function (youtube) {
  if (youtube.key == "y" && youtube.altKey && youtube.ctrlKey) {
    window.location.replace("https://youtube.com");
  }
});

// Ctrl + Alt + R to open reddit.com
document.addEventListener("keyup", function (reddit) {
  if (reddit.key == "r" && reddit.altKey && reddit.ctrlKey) {
    window.location.replace("https://reddit.com");
  }
});

// Ctrl + Alt + P to open protonmail.com
document.addEventListener("keyup", function (protonmail) {
  if (protonmail.key == "p" && protonmail.altKey && protonmail.ctrlKey) {
    window.location.replace("https://mail.proton.me");
  }
});

// Ctrl + Alt + T to open twitter.com
document.addEventListener("keyup", function (twitter) {
  if (twitter.key == "t" && twitter.altKey && twitter.ctrlKey) {
    window.location.replace("https://twitter.com");
  }
});

// Ctrl + Alt + C to open google_calendar
document.addEventListener("keyup", function (google_calendar) {
  if (
    google_calendar.key == "c" &&
    google_calendar.altKey &&
    google_calendar.ctrlKey
  ) {
    window.location.replace("https://calendar.google.com");
  }
});

// Ctrl + Alt + M to open mail.google.com
document.addEventListener("keyup", function (mail) {
  if (mail.key == "m" && mail.altKey && mail.ctrlKey) {
    window.location.replace("https://mail.google.com");
  }
});

// Ctrl + Alt + I to open instagram.com
document.addEventListener("keyup", function (instagram) {
  if (instagram.key == "i" && instagram.altKey && instagram.ctrlKey) {
    window.location.replace("https://instagram.com");
  }
});

// Ctrl + / to focus on searchbar
document.addEventListener("keyup", function (search) {
  if (search.key == "/" && search.ctrlKey) {
    document.querySelector(".search-bar").focus();
  }
});

// Ctrl + ArrowUp to click on se_icon
document.addEventListener("keyup", function (se_icon) {
  if (se_icon.key == "ArrowUp" && se_icon.ctrlKey) {
    document.querySelector(".se_icon").click();
  }
});

document.addEventListener("keyup", function (soundboard) {
  if (soundboard.keyCode == 66 && soundboard.shiftKey) {
    document.querySelector(".sounds-button").click();
  }
});

document.addEventListener("keyup", function (favModal) {
  if (favModal.keyCode == 90 && favModal.shiftKey) {
    document.querySelector(".favorite-button").click();
  }
});

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
// + Username feature v2 +
// ========
//
$(document).ready(function () {
  $("#save").click(function () {
    var username = $("#username_input").val();
    if (username == "") {
      $("#username_input").css("border", "2px solid var(--delete-warning-bg)");
    } else {
      localStorage.setItem("user", username);
      location.reload();
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

//
// ========
// + *New* Wallpaper Feature +
// Leaving the input bar empty will default to the theme's background color instead, this should prevent
// weird issues.
// ========
//

$("#save-image").click(function () {
  var image_url = $("#image_url").val();
  if (image_url == "") {
    $("#image_url").css("border", "2px solid var(--delete-warning-bg)");
    $("#save-image").text("😢 Error");
    $("#error-text-wallpaper").text("Image URL is empty");
  } else if (image_url.includes("http")) {
    $("#image_url").css("border", "2px solid #73d673");
    $("#save-image").text("🥳 Saving...");
    setTimeout(function () {
      location.reload();
    }, 5000);
    localStorage.setItem("image_url", image_url);
  }
});

// Display the saved image url
$(document).ready(function () {
  var image_url = localStorage.getItem("image_url");
  $("#your_image_url").text(image_url);
});

$(document).ready(function () {
  var image_url = localStorage.getItem("image_url");
  if (image_url) {
    $("body").css("background-image", "url(" + image_url + ")");
  }
});

$("#delete_custom_image").click(function () {
  localStorage.removeItem("image_url");
  location.reload();
});

// Reset feature

document.getElementById("reset_button").addEventListener("click", reset_data);

function reset_data() {
  document.getElementById("reset_button").innerHTML = "🚮";
  setTimeout(function () {
    location.reload();
  }, 5000);
  localStorage.clear();
}
