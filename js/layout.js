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

// 