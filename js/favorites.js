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
        '<button class="removebtn" title="Delete favorite.."><i class="las la-trash-alt"></i></button>' +
        '<a class="hide_fav_bar" target="_blank" href="' +
        $url.val() +
        '">' +
        '<button class="newtabbtn" data-tootik="Open in a new tab" data-tootik-conf="left"><i class="las la-external-link-alt"></i></button>' +
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

//
// ========
// + FAVORITES Search v1.1-cheesecake +
// ========
//

(function ($) {
  jQuery.expr[":"].Contains = function (a, i, m) {
    return (
      (a.textContent || a.innerText || "")
        .toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0
    );
  };

  function live_search(list) {
    $(".searchfavorites")
      .change(function () {
        // Getting search value
        var searchtext = $(this).val();
        if (searchtext) {
          // Finding If content matches with search keyword
          $matches = $(list)
            .find("a:Contains(" + searchtext + ")")
            .parent();
          // Hiding non matching lists
          $("li", list).not($matches).fadeOut(20);
          // Showing matching lists
          $matches.fadeIn(20);
        } else {
          // If search keyword is empty then display all the lists
          $(list).find("li").fadeIn(20);
        }
        return false;
      })
      .keyup(function () {
        $(this).change();
      });
  }

  $(function () {
    live_search($("#content"));
  });
})(jQuery);

//
// ========
// + Show message when save button is pressed +
// ========
//

document.getElementById("add").onclick = function () {
  var x = document.getElementById("saveMsgBar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
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
    title.value = '<img src="' + img.src + '">';
    title.value += " ";
    favicon_URL.value = "";
  }
};
