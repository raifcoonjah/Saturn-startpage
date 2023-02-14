// Keyboard presses:

let kpress = false;
if (localStorage.getItem("kpressEnabled") === "true") {
  kpress = true;
  document.getElementById("kpresstoggle").checked = true; // Update checkbox state if applicable
}
const pressedKeys = new Set();
document.addEventListener("keydown", function (event) {
  pressedKeys.add(event.key);
  if (kpress && pressedKeys.size >= 2) {
    const popup = document.getElementById("kpress_popup");
    popup.textContent = `${Array.from(pressedKeys).join(" + ")}`;
    popup.classList.remove("hidden");
    popup.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  }
});

// Add keyup event listener to document
document.addEventListener("keyup", function (event) {
  // Remove released key from the set
  pressedKeys.delete(event.key);

  // Hide popup if there are fewer than 2 keys pressed
  if (pressedKeys.size < 2) {
    document.getElementById("kpress_popup").classList.add("hidden");
  }
});

// Add checkbox event listener to toggle option and save to local storage
document
  .getElementById("kpresstoggle")
  .addEventListener("change", function (event) {
    kpress = event.target.checked;
    localStorage.setItem("kpressEnabled", kpress);
  });
