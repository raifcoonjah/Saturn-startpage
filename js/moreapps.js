var all_apps = document.querySelectorAll(".app");
var search = document.querySelector("#search");
var listContainer = document.querySelector(".suggestion-list");

var app_list = [];

for (let i = 0; i < all_apps.length; i++) {
  let app_title = all_apps[i].querySelector("p").innerText.toLowerCase();
  let app_icon = all_apps[i].querySelector("i").classList.value;

  let obj = {};
  obj.app_title = app_title;
  obj.app_icon = app_icon;

  app_list.push(obj);
}

search.addEventListener("keyup", generateAppList);
search.addEventListener("blur", hideAppList);

function generateAppList(event) {
  var fragment = document.createDocumentFragment();

  var userInput = event.target.value.toLowerCase();

  if (userInput.length === 0) {
    listContainer.classList.add("hidden");
    return false;
  }

  listContainer.innerHTML = "";
  listContainer.classList.remove("hidden");

  var filteredList = app_list.filter(function (arr) {
    return arr.app_title.includes(userInput);
  });

  if (filteredList.length === 0) {
    let paragraph = document.createElement("p");
    paragraph.innerText = "No app found";
    fragment.appendChild(paragraph);
  } else {
    for (let i = 0; i < filteredList.length; i++) {
      let paragraph = document.createElement("p");
      let icon = document.createElement("i");
      let span = document.createElement("span");

      icon.classList.value = filteredList[i].app_icon;
      span.innerText = filteredList[i].app_title;
      paragraph.appendChild(icon);
      paragraph.appendChild(span);
      fragment.appendChild(paragraph);
    }
  }

  listContainer.appendChild(fragment);
}

function hideAppList() {
  listContainer.classList.add("hidden");
}
