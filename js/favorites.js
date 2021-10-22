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
    $("#add-link-form").slideToggle("50");
  });

  // Remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    // Save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());
  });

  // Form toggle
  $("#new-link-button").click(function () {
    $("#add-link-form").slideToggle("100");
  });

  $("#new-close-fav").click(function () {
    $("#add-link-form").slideToggle("100");
  });
});

$("#cancel-fav-btn").click(function () {
  $("#add-link-form").slideToggle("100");
});

// cancel-fav-btn

//
// ========
// + FAVORITES Search v1.0-cheesecake +
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
          $("li", list).not($matches).fadeOut();
          // Showing matching lists
          $matches.fadeIn(150);
        } else {
          // If search keyword is empty then display all the lists
          $(list).find("li").fadeIn(150);
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
