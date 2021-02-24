// Favorites v2.0 | [jquery]
$(document).ready(function () {
  var $ul = $("#fav-link");
  var $title = $("#title");
  var $url = $("#url");

  //get links from local storage
  if (localStorage.getItem("vk-links")) {
    $ul.html(localStorage.getItem("vk-links"));
  }

  // add new link
  $("#add").click(function () {
    //add new item
    $("#fav-link").append(
      '<li><a href="' +
        $url.val() +
        '">' +
        $title.val() +
        '</a><button class="removebtn"><i class="las la-minus-circle"></i></button></li>'
    );

    //save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());

    //reset form
    $title.val("");
    $url.val("");
    $("#add-link-form").slideToggle("100");
  });

  //remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    //save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());
  });

  //form toggle
  $("#new-link-button").click(function () {
    $("#add-link-form").slideToggle("50");
  });
});
