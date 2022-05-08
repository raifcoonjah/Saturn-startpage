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

//
// ========
// + Favorites Modal +
// ========
//

document.addEventListener("keydown", function (favModal) {
  if (favModal.keyCode == 90 && favModal.shiftKey) {
    document.getElementById("favBtn").click();
  }
});

// Get the favModal
var favModal = document.getElementById("favModal");

// Get the button that opens the favModal
var btn = document.getElementById("favBtn");
// Get the <span> element that closes the favModal
var span = document.getElementsByClassName("cancel-fav-btn")[0];

// When the user clicks on the button, open the favModal

btn.onclick = function () {
  favModal.style.display = "block";
};

// When the user clicks on <span> (cancel), close the favModal
span.onclick = function () {
  favModal.style.display = "none";
};

// When the user clicks anywhere outside of the favModal, close it
window.onclick = function (event) {
  if (event.target == favModal) {
    favModal.style.display = "none";
  }
};

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
