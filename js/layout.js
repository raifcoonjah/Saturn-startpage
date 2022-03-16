// Add display flex to body and save using local storage
var saveBtn = document.getElementById("compact-design");
saveBtn.addEventListener("click", function () {
  document.body.style.display = "flex";
  localStorage.setItem("display", "true");
});

// check if local storage is set
if (localStorage.getItem("display") === "true") {
  document.body.style.display = "flex";
}

// add button to remove display flex from body and remove from local storage
var removeBtn = document.getElementById("default-layout");
removeBtn.addEventListener("click", function () {
  document.body.style.display = "block";
  localStorage.removeItem("display");
});

// Show first Message. [Compact]
document.getElementById("compact-design").onclick = function () {
  var compact_layout = document.getElementById("compact_layout");
  compact_layout.className = "show";
  setTimeout(function () {
    compact_layout.className = compact_layout.className.replace("show", "");
  }, 3000);
};

document.getElementById("default-layout").onclick = function () {
  var default_layout = document.getElementById("default_layout");
  default_layout.className = "show";
  setTimeout(function () {
    default_layout.className = default_layout.className.replace("show", "");
  }, 3000);
};
