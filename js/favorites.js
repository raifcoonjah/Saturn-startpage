//
// ========
// + FAVORITES v1.77.0 +
// Original Source: https://codepen.io/4gray/pen/glGun
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
      '<li><a href="' +
        $url.val() +
        '">' +
        $title.val() +
        "</a>" +
        '<button class="removebtn" title="Delete favorite"><i class="las la-minus-circle"></i></button></li>'
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
          $("li", list).not($matches).fadeOut(50);
          // Showing matching lists
          $matches.fadeIn(50);
        } else {
          // If search keyword is empty then display all the lists
          $(list).find("li").fadeIn(50);
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
  if (event.keyCode == 27) {
    // Esc
    opnSetting.click();
  }
});

//
// ========
// + Favorites Modal +
// ========
//

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

// When the user clicks on <span> (x), close the favModal
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

$(document).ready(function () {
  $("#add").click(function () {
    $("#sv-msg2").text("🕺 Your new favorite has been saved sucessfully. ");
  });
});
