//
// ========
// + Search Feature +
// ========
//

// ALlow user to press 4 time, increasing this number without adding
// more search_engines will cause some serious bugs to occur.

let se = 4;

// Listens for click event in se_button, once clicked,
// se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function () {
  se++;
  cycleSearchEngines(se);
});

// List Search providers

const search_engines = [
  {
    src: "google.svg",
    placeholder: "Google",
    action: "https://www.google.com/search?q=",
  },
  {
    src: "duckduckgo.svg",
    placeholder: "DuckDuckGo",
    action: "https://www.duckduckgo.com/",
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

// This happens when the user presses on the se button.

const cycleSearchEngines = (se) => {
  const curData = search_engines[(se + 1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder =
    "Search with " + curData.placeholder + "..";
  document.getElementById("search_eng_form").action = curData.action;
};
