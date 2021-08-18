// Favorites v2.3 | [BUILD WITH JQUERY]
$(document).ready(function () {
  var $ul = $("#fav-link");
  var $title = $("#title");
  var $url = $("#url");

  // Get links from local storage
  if (localStorage.getItem("favorites-link")) {
    $ul.html(localStorage.getItem("favorites-link"));
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
        '<button class="removebtn" title="Delete item"><i class="las la-minus-circle"></i></button></li>'
    );

    // Save changes to localstorage
    localStorage.setItem("favorites-link", $ul.html());

    // Reset form
    $title.val("");
    $url.val("");
    $("#add-link-form").slideToggle("50");
  });

  // Remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    // Save changes to localstorage
    localStorage.setItem("favorites-link", $ul.html());
  });

  // Form toggle
  $("#new-link-button").click(function () {
    $("#add-link-form").slideToggle("100");
  });

  $("#new-close-fav").click(function () {
    $("#add-link-form").slideToggle("100");
  });
});

// Favorites live search v1.0-pie
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
        //getting search value
        var searchtext = $(this).val();
        if (searchtext) {
          //finding If content matches with search keyword
          $matches = $(list)
            .find("a:Contains(" + searchtext + ")")
            .parent();
          //hiding non matching lists
          $("li", list).not($matches).fadeOut();
          //showing matching lists
          $matches.fadeIn(150);
        } else {
          //if search keyword is empty then display all the lists
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
