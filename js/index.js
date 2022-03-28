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
// + Time and month text +
// ========
//
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
}, 59 * 1000);

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
//
// ========
// + Saturn's theme engine v2.1 +
// ========
//

// Default themes
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Darker themes
const spaceButton = document.getElementById("space");

// Experimental themes
const linkinParkButton = document.getElementById("linkin-park");

// Dark themes
const lighterdark_theme_button = document.getElementById("lighterdarktheme");
const draculaButton = document.getElementById("dracula");
const nordButton = document.getElementById("nord");

// High contrast theme
const highcontrastButton = document.getElementById("highcontrast");
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

// Dark theme
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  body.classList.replace("space", "dark");
  body.classList.replace("linkin-park", "dark");
  body.classList.replace("lighterdarktheme", "dark");
  body.classList.replace("dracula", "dark");
  body.classList.replace("nord", "dark");
  body.classList.replace("highcontrast", "dark");
  // Adding new theme? Use this sample code:
  // body.classList.replace("yourthemeID", "name of the current theme");
  localStorage.setItem("theme", "dark");
};

// Default light theme
lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  body.classList.replace("space", "light");
  body.classList.replace("linkin-park", "light");
  body.classList.replace("lighterdarktheme", "light");
  body.classList.replace("dracula", "light");
  body.classList.replace("nord", "light");
  body.classList.replace("highcontrast", "light");
  localStorage.setItem("theme", "light");
};

// Material-ish dark theme
spaceButton.onclick = () => {
  body.classList.replace("dark", "space");
  body.classList.replace("light", "space");
  body.classList.replace("linkin-park", "space");
  body.classList.replace("lighterdarktheme", "space");
  body.classList.replace("dracula", "space");
  body.classList.replace("nord", "space");
  body.classList.replace("highcontrast", "space");
  localStorage.setItem("theme", "space");
};

// LinkinPark theme
linkinParkButton.onclick = () => {
  body.classList.replace("dark", "linkin-park");
  body.classList.replace("light", "linkin-park");
  body.classList.replace("space", "linkin-park");
  body.classList.replace("lighterdarktheme", "linkin-park");
  body.classList.replace("dracula", "linkin-park");
  body.classList.replace("nord", "linkin-park");
  body.classList.replace("highcontrast", "linkin-park");
  localStorage.setItem("theme", "linkin-park");
};

// Lighter Grey ish theme theme
lighterdark_theme_button.onclick = () => {
  body.classList.replace("dark", "lighterdarktheme");
  body.classList.replace("light", "lighterdarktheme");
  body.classList.replace("space", "lighterdarktheme");
  body.classList.replace("linkin-park", "lighterdarktheme");
  body.classList.replace("dracula", "lighterdarktheme");
  body.classList.replace("nord", "lighterdarktheme");
  body.classList.replace("highcontrast", "lighterdarktheme");
  localStorage.setItem("theme", "lighterdarktheme");
};

// Dracula theme (beta)
draculaButton.onclick = () => {
  body.classList.replace("dark", "dracula");
  body.classList.replace("light", "dracula");
  body.classList.replace("linkin-park", "dracula");
  body.classList.replace("lighterdarktheme", "dracula");
  body.classList.replace("space", "dracula");
  body.classList.replace("nord", "dracula");
  body.classList.replace("highcontrast", "dracula");
  localStorage.setItem("theme", "dracula");
};

// Nord theme (beta)
nordButton.onclick = () => {
  body.classList.replace("dark", "nord");
  body.classList.replace("light", "nord");
  body.classList.replace("space", "nord");
  body.classList.replace("linkin-park", "nord");
  body.classList.replace("lighterdarktheme", "nord");
  body.classList.replace("dracula", "nord");
  body.classList.replace("highcontrast", "nord");
  localStorage.setItem("theme", "nord");
};

highcontrast.onclick = () => {
  body.classList.replace("light", "highcontrast");
  body.classList.replace("dark", "highcontrast");
  body.classList.replace("space", "highcontrast");
  body.classList.replace("linkin-park", "highcontrast");
  body.classList.replace("lighterdarktheme", "highcontrast");
  body.classList.replace("dracula", "highcontrast");
  body.classList.replace("nord", "highcontrast");
  localStorage.setItem("theme", "highcontrast");
};

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
      }, 1000);
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
