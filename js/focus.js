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
    document.title = "New Tab - Studying focus";
  } else {
    $(".study_focus").attr("checked", false);
    localStorage.removeItem("study_focus");
  }
  $(".study_focus").click(function () {
    if (this.checked) {
      $(".study_focus_mode").hide();
      $("#focus_status_text").show();
      document.title = "New Tab - Studying focus";
    } else {
      $(".study_focus_mode").show();
      $("#focus_status_text").hide();
      document.title = "New Tab";
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
    document.title = "New tab - Programming focus";
  } else {
    $(".programming_focus").attr("checked", false);
    localStorage.removeItem("programming_focus");
  }
  $(".programming_focus").click(function () {
    if (this.checked) {
      $(".programming_focus_mode").hide();
      $("#focus_status_text").show();
      document.title = "New Tab - Programming focus";
    } else {
      $(".programming_focus_mode").show();
      $("#focus_status_text").hide();
      document.title = "New Tab";
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
    document.title = "New Tab - Relaxation focus";

    $(".relaxation_focus").attr("checked", true);
  } else {
    $(".relaxation_focus").attr("checked", false);
    localStorage.removeItem("relaxation_focus");
  }
  $(".relaxation_focus").click(function () {
    if (this.checked) {
      $(".relaxation_focus_mode").hide();
      $("#focus_status_text").show();
      document.title = "New Tab - Relaxation focus";
    } else {
      $(".relaxation_focus_mode").show();
      $("#focus_status_text").hide();
      document.title = "New Tab";
    }
    localStorage.setItem("relaxation_focus", this.checked);
  });
});
