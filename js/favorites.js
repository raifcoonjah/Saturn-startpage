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
    $("#add-link-form").slideToggle("100");
  });

  // Remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    // Save changes to localstorage
    localStorage.setItem("favorites-link", $ul.html());
  });

  // Form toggle
  $("#new-link-button").click(function () {
    $("#add-link-form").slideToggle("50");
  });

  $("#new-close-fav").click(function () {
    $("#add-link-form").slideToggle("100");
  });
});
