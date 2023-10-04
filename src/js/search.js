//
// ========
// + Search Feature +
// ========
//

let se = 0;

// List Search providers
const search_engines = [
  {
    src: "search.svg",
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
  {
    src: "protondb.svg",
    placeholder: "Protondb",
    action: "https://www.protondb.com/search?q=",
  },
];

// Function to update search engine based on user selection
function updateSearchEngine() {
  const selectedEngine = document.getElementById("searchEngine").value;
  se = parseInt(selectedEngine, 10);
  cycleSearchEngines(se);
}

// Listens for click event in se_button, once clicked,
// se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function () {
  se = (se + 1) % search_engines.length;
  cycleSearchEngines(se);
});

// This happens when the user changes the default search engine from the dropdown
document.getElementById("searchEngine").addEventListener("change", updateSearchEngine);

// This happens when the user presses on the se button.
const cycleSearchEngines = (se) => {
  const curData = search_engines[se];

  document.getElementById("se_icon").src = "assets/icons/" + curData.src;
  document.getElementById("search").placeholder =
    "Search with " + curData.placeholder + "..";
  document.getElementById("search_eng_form").action = curData.action;
};

// Initialize with the default search engine
cycleSearchEngines(se);

// ...

// Function to update search engine based on user selection
function updateSearchEngine() {
  const selectedEngine = document.getElementById("searchEngine").value;
  se = parseInt(selectedEngine, 10);
  cycleSearchEngines(se);

  // Save the selected search engine to local storage
  localStorage.setItem("defaultSearchEngine", se);
}

// Check if there's a stored default search engine in local storage
const storedSearchEngine = localStorage.getItem("defaultSearchEngine");

if (storedSearchEngine !== null) {
  // If there's a stored value, use it as the default search engine
  se = parseInt(storedSearchEngine, 10);
} else {
  // If there's no stored value, use the default (e.g., Google)
  se = 0;
}

// Initialize with the default search engine
cycleSearchEngines(se);
