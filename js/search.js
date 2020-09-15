// Allow the user, to switch three times.
let se = 3;

// Listens for click event in se_button, once clicked, se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function () {
  se++;
  cycleSearchEngines(se);
});

const search_engines = [
  {
    src: "ddg.svg",
    placeholder: "DuckDuckGo",
    action: "https://duckduckgo.com/",
  },
  {
    src: "ggl.svg",
    placeholder: "Google",
    action: "https://www.google.com/search?q=",
  },
  {
    src: "rdt.svg",
    placeholder: "Reddit",
    action: "https://www.reddit.com/search?q=",
  },
  {
    src: "yt.svg",
    placeholder: "YouTube",
    action: "https://www.youtube.com/results?q=",
  },
];

const cycleSearchEngines = (se) => {
  const curData = search_engines[(se + 1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder =
    "Search with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};
