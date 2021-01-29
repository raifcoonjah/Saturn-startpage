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
    $("#add-link-form").slideToggle("100");
  });
});

// New favorites search and sort feature!

// Search v1.0
function favSearchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("favSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("fav-link");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Sort feature
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("sortSupport");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < b.length - 1; i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
