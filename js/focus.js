//
// ========
// + Saturn Focus +
// + A new way to get to work +
// ========
//

//
// ========
// + Study Focus +
// ========
//
$(function () {
  var status = localStorage.getItem("study_focus");
  if (status == "true") {
    $(".study_focus_mode").css("display", "none");
    $("#focus_status_text").css("display", "block");
    $(".study_focus").attr("checked", true);
  } else {
    $(".study_focus").attr("checked", false);
  }
  $(".study_focus").click(function () {
    if (this.checked) {
      $(".study_focus_mode").hide();
      $("#focus_status_text").show();
    } else {
      $(".study_focus_mode").show();
      $("#focus_status_text").hide();
    }
    localStorage.setItem("study_focus", this.checked);
  });
});

//
// ========
// + Programming Focus +
// ========
//
$(function () {
  var status = localStorage.getItem("programming_focus");
  if (status == "true") {
    $(".programming_focus_mode").css("display", "none");
    $("#focus_status_text").css("display", "block");
    $(".programming_focus").attr("checked", true);
  } else {
    $(".programming_focus").attr("checked", false);
  }
  $(".programming_focus").click(function () {
    if (this.checked) {
      $(".programming_focus_mode").hide();
      $("#focus_status_text").show();
    } else {
      $(".programming_focus_mode").show();
      $("#focus_status_text").hide();
    }
    localStorage.setItem("programming_focus", this.checked);
  });
});

//
// ========
// + Relaxation Focus +
// ========
//
$(function () {
  var status = localStorage.getItem("relaxation_focus");
  if (status == "true") {
    $(".relaxation_focus_mode").css("display", "none");
    $("#focus_status_text").css("display", "block");

    $(".relaxation_focus").attr("checked", true);
  } else {
    $(".relaxation_focus").attr("checked", false);
  }
  $(".relaxation_focus").click(function () {
    if (this.checked) {
      $(".relaxation_focus_mode").hide();
      $("#focus_status_text").show();
    } else {
      $(".relaxation_focus_mode").show();
      $("#focus_status_text").hide();
    }
    localStorage.setItem("relaxation_focus", this.checked);
  });
});
