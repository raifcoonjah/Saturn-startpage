// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR.
(function ($) {
  jQuery.expr[":"].Contains = function (a, i, m) {
    return (
      (a.textContent || a.innerText || "")
        .toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0
    );
  };

  //live search function
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
