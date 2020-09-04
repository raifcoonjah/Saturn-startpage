// Allow the user, to switch three times.
let se = 3;

// Listens for click event in se_button, once clicked, se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function () {
  se++;
  cycleSearchEngines(se);
});

function check_if_search_empty() {
  //Do not allow searching if the user clicks "GO" when the search box is empty
  if (document.forms["search_eng_form"]["q"].value == "") {
    event.preventDefault();
  }
}

const search_engines = [
  {
    src: "duckduckgo.svg",
    placeholder: "DuckDuckGo",
    action: "https://www.duckduckgo.com/",
  },
  {
    src: "google.svg",
    placeholder: "Google",
    action: "https://www.google.com/search?q=",
  },
  {
    src: "reddit.svg",
    placeholder: "Reddit",
    action: "https://www.reddit.com/search?q=",
  },
  {
    src: "youtube.svg",
    placeholder: "YouTube",
    action: "https://www.youtube.com/results?q=",
  },
];

const cycleSearchEngines = (se) => {
  const curData = search_engines[(se + 1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder =
    "Searching with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};
