// add js stuff here.
// Think this should be in Saturn? Feel free to make a PR.

// Hide stuff js
$(function () {
  var status = localStorage.getItem("chkStatus");
  if (status == "true") {
    $(".search-bar_fav").css("display", "none");
    $(".AvGamesCheckBox").attr("checked", true);
  } else {
    $(".search-bar_fav").css("display", "block");
    $(".AvGamesCheckBox").attr("checked", false);
  }
  $(".AvGamesCheckBox").click(function () {
    if (this.checked) {
      $(".search-bar_fav").hide();
    } else {
      $(".search-bar_fav").show();
    }
    localStorage.setItem("chkStatus", this.checked);
  });
});

// hide favorites completely.

$(function () {
  var status = localStorage.getItem("favorites_hidden");
  if (status == "true") {
    $(".fav-container").css("display", "none");
    $(".AvGamesCheckBox_favo_compl").attr("checked", true);
  } else {
    $(".fav-container").css("display", "block");
    $(".AvGamesCheckBox_favo_compl").attr("checked", false);
  }
  $(".AvGamesCheckBox_favo_compl").click(function () {
    if (this.checked) {
      $(".fav-container").hide();
    } else {
      $(".fav-container").show();
    }
    localStorage.setItem("favorites_hidden", this.checked);
  });
});
