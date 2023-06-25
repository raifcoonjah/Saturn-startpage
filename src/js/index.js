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
// + Time and month text +
// ========
//
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
  if (cnum < 10) {
    cnum = "0" + cnum;
  }
  return " " + cday + ", " + cnum + " " + cmonth;
}
// Set up the date only
document.getElementById("date").innerHTML = getDate();

// Set up the clock only
document.getElementById("time").innerHTML = getTime();

// Reload time after a certain amount of time.
setInterval(() => {
  document.getElementById("time").innerHTML = getTime();
}, 60 * 1000);

//
// ========
// + Wallpaper Modal +
// ========
//

// var wallpaperModal = document.querySelector(".wallpaper_modal");
// var wallpaperButton = document.getElementById("wallpaper-button");
// var closeWallpaperButton = document.querySelector(".close-wallpaper");

// function toggleWallpaper() {
//   wallpaperModal.classList.toggle("show-wallpaper-modal");
// }

// function windowOutclick3(event) {
//   if (event.target === wallpaperModal) {
//     toggleWallpaper();
//   }
// }

// wallpaperButton.addEventListener("click", toggleWallpaper);
// closeWallpaperButton.addEventListener("click", toggleWallpaper);
// window.addEventListener("click", windowOutclick3);

//
// ========
// + Favorites Modal +
// ========
//

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
// + Keyboard Shortcuts +
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
    document.querySelector(".settings_modal").classList.remove("show-modal");
    document
      .querySelector(".fav_modal")
      .classList.remove("show-favorite-modal");
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
document.addEventListener("keyup", function (favModal) {
  if (favModal.keyCode == 90 && favModal.shiftKey) {
    document.querySelector(".favorite-button").click();
  }
});

//
// ========
// + Username feature v2 +
// ========
//
//

document.querySelector("#save").addEventListener("click", function () {
  var usernameInput = document.querySelector("#username_input");
  var username = usernameInput.value;
  if (username == "") {
    document.querySelector("#username_input").style.border =
      "2px solid var(--delete-warning-bg)";
  } else {
    localStorage.setItem("user", username);
    location.reload();
  }
});
//
// ========
// + *New* Wallpaper Feature +
// ========
//

document.querySelector("#save-image").addEventListener("click", function () {
  var imageUrl = document.querySelector("#image_url");
  var processingBg = document.querySelector(".processing_bg");
  var imageUrlValue = imageUrl.value;
  if (imageUrlValue == "") {
    processingBg.innerHTML =
      '<i class="las la-exclamation-triangle"></i>' + " URL cannot be empty";
  } else {
    processingBg.innerHTML =
      '<i class="las la-check-circle"></i>' + " Background applied ";
    localStorage.setItem("image_url", imageUrlValue);
    localStorage.removeItem("imageupload");
    body.style.backgroundImage = "url(" + imageUrlValue + ")";
  }
});

// up-load image
const input = document.getElementById("imageupload");
const processingBg = document.querySelector(".processing_bg");

input.addEventListener("change", (event) => {
  const image = event.target.files[0];
  const imageSize = image.size / 1024 / 1024;
  if (imageSize >= 4) {
    processingBg.innerHTML =
      '<span style="color:var(--delete-warning-bg)"> <i class="las la-exclamation-circle"></i>' +
      " Error, this image is above 4MB in size. ";
    +"</span>";
    return;
  }

  processingBg.innerHTML =
    '<i class="las la-check-circle"></i>' + " Background applied ";
  localStorage.removeItem("imageupload");
  localStorage.removeItem("image_url");

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    localStorage.setItem("imageupload", reader.result);
    body.style.backgroundImage = "url(" + reader.result + ")";
  };
});
// grab and set as background ;)
if (localStorage.getItem("imageupload")) {
  document.querySelector("body").style.backgroundImage =
    "url(" + localStorage.getItem("imageupload") + ")";
}

// Display image resolution
var img = document.getElementById("imageupload");
img.onload = function () {
  alert(this.width + "x" + this.height);
};

//
// ========
// + *New* Apply URL to body +
// ========
//
if (localStorage.getItem("image_url")) {
  document.querySelector("body").style.backgroundImage =
    "url(" + localStorage.getItem("image_url") + ")";
}

//
// ========
// + *New* Delete and clear image_url +
// ========
//
document.querySelector("#delete_custom_image").addEventListener("click", () => {
  const imageUrl = localStorage.getItem("image_url");
  const imageUpload = localStorage.getItem("imageupload");

  if (!imageUrl && !imageUpload) {
    document.querySelector("#delete_custom_image").innerHTML =
      '<i class="las la-exclamation-circle"></i> <span>No background <br/> found </span>';
    return;
  }

  if (confirm("Delete background?")) {
    localStorage.removeItem("image_url");
    localStorage.removeItem("imageupload");
    document.querySelector("body").style.backgroundImage = "";
    document.querySelector("#image_url").style.width = "100%";
    document.querySelector("#copy-backgroundurl").style.display = "none";
    document.querySelector("#delete_custom_image").innerHTML =
      '<i class="las la-check-circle"></i> <span>Background <br/> removed </span>';
  }
});

//
// ========
// + *New* Copy to clipboard * +
// ========

let copy_image_url = document.getElementById("copy-backgroundurl");

if (localStorage.getItem("image_url") == null) {
  document.querySelector("#copy-backgroundurl").style.display = "none";
  document.querySelector("#image_url").style.width = "100%";
} else {
  copy_image_url.addEventListener("click", () => {
    navigator.clipboard.writeText(localStorage.getItem("image_url"));
    document.querySelector("#copy-backgroundurl").innerHTML =
      '<i class="las la-clipboard-check"></i>';
  });
}
//

//
// ========
// + *New* Reset button  +
// ========
//

document.getElementById("reset_button").addEventListener("click", reset_data);
function reset_data() {
  if (confirm("⚠ Beep boop!? Are you sure you want to reset all your data?")) {
    document.getElementById("reset_button").innerHTML =
      "<img style='padding-bottom:10px;' class='loading-svg' src='/assets/img/loading-red.svg'> <span>Resetting...</span><span>Please wait!</span>";
    localStorage.clear();
    setTimeout(function () {
      location.reload();
    }, 5000);
  }
}

//
// ========
// + UI Tweaks  +
// These features are not essential, but they make everything look better & feel better.
// ========
//

// UI Tweaks: Force saturn header to use white color.
document
  .querySelector("#force_white_color_header")
  .addEventListener("click", function () {
    if (localStorage.getItem("force_white_color_header")) {
      localStorage.removeItem("force_white_color_header");
      document.querySelector(".sat-header").style.color = "var(--sat-ids)";
      document.querySelector(".apps_list").style.color = "var(--sat-ids)";
    } else {
      localStorage.setItem("force_white_color_header", true);
      document.querySelector(".sat-header").style.color = "#fff";
      document.querySelector(".apps_list").style.color = "#fff";
    }
  });

if (localStorage.getItem("force_white_color_header")) {
  document.querySelector(".sat-header").style.color = "#fff";
  document.querySelector(".apps_list").style.color = "#fff";
}

// UI Tweak: Make all text bold

document.querySelector("#bold_text").addEventListener("click", function () {
  if (localStorage.getItem("bold_text")) {
    localStorage.removeItem("bold_text");
    document.querySelector("body").style.fontWeight = "normal";
  } else {
    localStorage.setItem("bold_text", true);
    document.querySelector("body").style.fontWeight = "600";
  }
});

if (localStorage.getItem("bold_text")) {
  document.querySelector("body").style.fontWeight = "600";
}

// UI Tweak: Use Sans Serif as default font
document.querySelector("#browser_font").addEventListener("click", function () {
  if (localStorage.getItem("browser_font")) {
    localStorage.removeItem("browser_font");
    document.querySelector("body").style.fontFamily = "var(--default-font)";
  } else {
    localStorage.setItem("browser_font", true);
    document.querySelector("body").style.fontFamily = "sans-serif";
  }
});

if (localStorage.getItem("browser_font")) {
  document.querySelector("body").style.fontFamily = "sans-serif";
}

// Check internet connection status
window.addEventListener(
  "load",
  function (connection_ss) {
    if (navigator.onLine) {
    } else {
      document.getElementById("connection_status").style.display = "block";
    }
  },
  false
);

// Minimalistic UI

const minimalisticButton = document.querySelector("#toggle_minimalistic_mode");
const minimalisticUi = document.querySelector(".minimalistic-ui");
const satHeader = document.querySelector(".sat-header");

minimalisticButton.addEventListener("click", () => {
  if (minimalisticButton.checked) {
    minimalisticUi.style.display = "none";
    satHeader.style.paddingTop = "30vh";
    satHeader.style.fontSize = "23px";
    localStorage.setItem("minimalisticUiDisplay", "none");
  } else {
    location.reload();
    localStorage.removeItem("minimalisticUiDisplay");
  }
});

const minimalisticCheck = localStorage.getItem("minimalisticUiDisplay");
if (minimalisticCheck) {
  minimalisticUi.style.display = minimalisticCheck;
  minimalisticButton.checked = minimalisticCheck === "none";

  if (minimalisticUi.style.display === "none") {
    satHeader.style.paddingTop = "30vh";
    satHeader.style.fontSize = "23px";
  }
}

document.getElementById("trigger2").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("open");
});

document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const trigger = document.getElementById("trigger2");

  if (!sidebar.contains(event.target) && event.target !== trigger) {
    sidebar.classList.remove("open");
  }
});

// Get all tab items
const tabItems = document.querySelectorAll(".settings-tab-item");

// Get all tab content panes
const tabPanes = document.querySelectorAll(".tab-pane");

// Function to switch tabs
function switchTab(event) {
  // Remove 'active' class from all tab items and panes
  tabItems.forEach((item) => item.classList.remove("active"));
  tabPanes.forEach((pane) => pane.classList.remove("active"));

  // Add 'active' class to the clicked tab item
  this.classList.add("active");

  // Get the target tab pane based on data-tab attribute
  const targetPaneId = this.getAttribute("data-tab");
  const targetPane = document.getElementById(targetPaneId);

  // Add 'active' class to the target tab pane
  targetPane.classList.add("active");
}

// Add click event listener to each tab item
tabItems.forEach((item) => item.addEventListener("click", switchTab));
