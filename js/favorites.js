//
// ========
// + FAVORITES v1.79.0 +
// Original Source: https://codepen.io/4gray/pen/glGun
// Heavily modified and improve various things
// ========
//
$(document).ready(function () {
  var $ul = $("#fav-link");
  var $title = $("#title");
  var $url = $("#url");

  // Get links from local storage
  if (localStorage.getItem("vk-links")) {
    $ul.html(localStorage.getItem("vk-links"));
  }

  // Add new link
  $("#add").click(function () {
    // Add new item
    $("#fav-link").append(
      '<li class="fav-link"><a href="' +
        $url.val() +
        '">' +
        $title.val() +
        "</a>" +
        '<button class="removebtn" title="Delete favorite..."><i class="las la-trash-alt"></i></button>' +
        '<a class="hide_fav_bar" target="_blank" href="' +
        $url.val() +
        '">' +
        '<button class="newtabbtn" title="Open in new tab..."><i class="las la-external-link-alt"></i></button>' +
        "</a></li>"
    );

    // Save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());

    // Reset form
    $title.val("");
    $url.val("");
  });

  // Remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    // Save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());
  });
});
// ========
// + FAVORITES Search [BETA] v2.0-cheesecake +
// ========
//
document.getElementById("searchfavorites").onkeyup = function () {
  var search = document.getElementById("searchfavorites").value.toLowerCase();
  var items = document.getElementById("content").getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var title = item.getElementsByTagName("a")[0].innerHTML.toLowerCase();
    if (title.indexOf(search) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
};

//
// ========
// + Show message when save button is pressed +
// ========
//
document.getElementById("add").onclick = function () {
  var save_notification = document.getElementById("saveMsgBar");
  save_notification.className = "show";
  setTimeout(function () {
    save_notification.className = save_notification.className.replace(
      "show",
      ""
    );
  }, 3000);
};

const livepreview = document.getElementById("title");
livepreview.onkeyup = function () {
  document.getElementById("livepreview").innerHTML = livepreview.value;
};

//
// ========
// + Favorites Icon finder +
// ========
//

// Button that adds a <img> tag inside input bar with id title
const addImg = document.getElementById("addImg");
addImg.onclick = function () {
  const title = document.getElementById("title");
  const favicon_URL = document.getElementById("favicon-url");
  const img = document.createElement("img");
  if (favicon_URL.value === "") {
    favicon_URL.style.border = "2px solid var(--delete-warning-bg)";
  }
  // check if input is empty
  else {
    // get favicon from URL
    img.src = "https://unavatar.io/" + favicon_URL.value;
    img.style.width = "20px";
    img.style.height = "20px";
    title.value = '<img loading="lazy" src="' + img.src + '">';
    favicon_URL.value = "";
  }
};
