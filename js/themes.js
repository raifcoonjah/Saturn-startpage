//
//
// ========
// + Saturn's theme engine v2.1 +
// ========
//

// Light themes
const LightPlusPlusButton = document.getElementById("lightplusplus");

// Default themes
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Darker themes
const spaceButton = document.getElementById("space");
const halloweenButton = document.getElementById("halloween");
const amazinglypurple = document.getElementById("amazinglypurple");

// Experimental themes
const linkinParkButton = document.getElementById("linkin-park");

// Dark themes
const lighterdark_theme_button = document.getElementById("lighterdarktheme");
const draculaButton = document.getElementById("dracula");
const nordButton = document.getElementById("nord");
const ghostlygreenButton = document.getElementById("ghostlygreen");

// High contrast theme
const highcontrastButton = document.getElementById("highcontrast");
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
} else if (theme === null) {
  // if no theme is set, Saturn will use the default light theme.
  body.classList.add("light");
}

// lightplusplus theme
LightPlusPlusButton.onclick = () => {
  body.classList.replace("dark", "lightplusplus");
  body.classList.replace("light", "lightplusplus");
  body.classList.replace("space", "lightplusplus");
  body.classList.replace("linkin-park", "lightplusplus");
  body.classList.replace("lighterdarktheme", "lightplusplus");
  body.classList.replace("dracula", "lightplusplus");
  body.classList.replace("nord", "lightplusplus");
  body.classList.replace("highcontrast", "lightplusplus");
  body.classList.replace("amazinglypurple", "lightplusplus");
  body.classList.replace("halloween", "lightplusplus");
  body.classList.replace("ghostlygreen", "lightplusplus");
  localStorage.setItem("theme", "lightplusplus");
};

// Amazingly purple theme
amazinglypurple.onclick = () => {
  body.classList.replace("dark", "amazinglypurple");
  body.classList.replace("light", "amazinglypurple");
  body.classList.replace("space", "amazinglypurple");
  body.classList.replace("linkin-park", "amazinglypurple");
  body.classList.replace("lighterdarktheme", "amazinglypurple");
  body.classList.replace("dracula", "amazinglypurple");
  body.classList.replace("nord", "amazinglypurple");
  body.classList.replace("highcontrast", "amazinglypurple");
  body.classList.replace("lightplusplus", "amazinglypurple");
  body.classList.replace("halloween", "amazinglypurple");
  body.classList.replace("ghostlygreen", "amazinglypurple");
  localStorage.setItem("theme", "amazinglypurple");
};

// Dark theme
darkButton.onclick = () => {
  body.classList.remove(
    "light",
    "space",
    "linkin-park",
    "lighterdarktheme",
    "lightplusplus",
    "dracula",
    "nord",
    "highcontrast",
    "amazinglypurple",
    "halloween",
    "ghostlygreen"
  );
  body.classList.add("dark");
  // Adding new theme? Use this sample code:
  // body.classList.replace("yourthemeID", "name of the current theme");
  localStorage.setItem("theme", "dark");
};

// Default light theme
lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  body.classList.replace("space", "light");
  body.classList.replace("linkin-park", "light");
  body.classList.replace("lighterdarktheme", "light");
  body.classList.replace("dracula", "light");
  body.classList.replace("nord", "light");
  body.classList.replace("highcontrast", "light");
  body.classList.replace("amazinglypurple", "light");
  body.classList.replace("lightplusplus", "light");
  body.classList.replace("halloween", "light");
  body.classList.replace("ghostlygreen", "light");
  localStorage.setItem("theme", "light");
};

// Material-ish dark theme
spaceButton.onclick = () => {
  body.classList.replace("dark", "space");
  body.classList.replace("light", "space");
  body.classList.replace("linkin-park", "space");
  body.classList.replace("lighterdarktheme", "space");
  body.classList.replace("dracula", "space");
  body.classList.replace("nord", "space");
  body.classList.replace("highcontrast", "space");
  body.classList.replace("amazinglypurple", "space");
  body.classList.replace("lightplusplus", "space");
  body.classList.replace("halloween", "space");
  body.classList.replace("ghostlygreen", "space");
  localStorage.setItem("theme", "space");
};

// LinkinPark theme
linkinParkButton.onclick = () => {
  body.classList.replace("dark", "linkin-park");
  body.classList.replace("light", "linkin-park");
  body.classList.replace("space", "linkin-park");
  body.classList.replace("lighterdarktheme", "linkin-park");
  body.classList.replace("dracula", "linkin-park");
  body.classList.replace("nord", "linkin-park");
  body.classList.replace("highcontrast", "linkin-park");
  body.classList.replace("amazinglypurple", "linkin-park");
  body.classList.replace("lightplusplus", "linkin-park");
  body.classList.replace("halloween", "linkin-park");
  body.classList.replace("ghostlygreen", "linkin-park");
  localStorage.setItem("theme", "linkin-park");
};

// Lighter Grey ish theme theme
lighterdark_theme_button.onclick = () => {
  body.classList.replace("dark", "lighterdarktheme");
  body.classList.replace("light", "lighterdarktheme");
  body.classList.replace("space", "lighterdarktheme");
  body.classList.replace("linkin-park", "lighterdarktheme");
  body.classList.replace("dracula", "lighterdarktheme");
  body.classList.replace("nord", "lighterdarktheme");
  body.classList.replace("highcontrast", "lighterdarktheme");
  body.classList.replace("amazinglypurple", "lighterdarktheme");
  body.classList.replace("lightplusplus", "lighterdarktheme");
  body.classList.replace("halloween", "lighterdarktheme");
  body.classList.replace("ghostlygreen", "lighterdarktheme");
  localStorage.setItem("theme", "lighterdarktheme");
};

// Dracula theme (beta)
draculaButton.onclick = () => {
  body.classList.replace("dark", "dracula");
  body.classList.replace("light", "dracula");
  body.classList.replace("linkin-park", "dracula");
  body.classList.replace("lighterdarktheme", "dracula");
  body.classList.replace("space", "dracula");
  body.classList.replace("nord", "dracula");
  body.classList.replace("highcontrast", "dracula");
  body.classList.replace("amazinglypurple", "dracula");
  body.classList.replace("lightplusplus", "dracula");
  body.classList.replace("halloween", "dracula");
  body.classList.replace("ghostlygreen", "dracula");
  localStorage.setItem("theme", "dracula");
};

// Nord theme (beta)
nordButton.onclick = () => {
  body.classList.replace("dark", "nord");
  body.classList.replace("light", "nord");
  body.classList.replace("space", "nord");
  body.classList.replace("linkin-park", "nord");
  body.classList.replace("lighterdarktheme", "nord");
  body.classList.replace("dracula", "nord");
  body.classList.replace("highcontrast", "nord");
  body.classList.replace("amazinglypurple", "nord");
  body.classList.replace("lightplusplus", "nord");
  body.classList.replace("halloween", "nord");
  body.classList.replace("ghostlygreen", "nord");
  localStorage.setItem("theme", "nord");
};

highcontrast.onclick = () => {
  body.classList.replace("light", "highcontrast");
  body.classList.replace("dark", "highcontrast");
  body.classList.replace("space", "highcontrast");
  body.classList.replace("linkin-park", "highcontrast");
  body.classList.replace("lighterdarktheme", "highcontrast");
  body.classList.replace("dracula", "highcontrast");
  body.classList.replace("nord", "highcontrast");
  body.classList.replace("amazinglypurple", "highcontrast");
  body.classList.replace("lightplusplus", "highcontrast");
  body.classList.replace("halloween", "highcontrast");
  body.classList.replace("ghostlygreen", "highcontrast");
  localStorage.setItem("theme", "highcontrast");
};

halloweenButton.onclick = () => {
  body.classList.replace("light", "halloween");
  body.classList.replace("dark", "halloween");
  body.classList.replace("space", "halloween");
  body.classList.replace("linkin-park", "halloween");
  body.classList.replace("lighterdarktheme", "halloween");
  body.classList.replace("dracula", "halloween");
  body.classList.replace("nord", "halloween");
  body.classList.replace("amazinglypurple", "halloween");
  body.classList.replace("lightplusplus", "halloween");
  body.classList.replace("highcontrast", "halloween");
  body.classList.replace("ghostlygreen", "halloween");
  localStorage.setItem("theme", "halloween");
};

ghostlygreenButton.onclick = () => {
  body.classList.replace("light", "ghostlygreen");
  body.classList.replace("dark", "ghostlygreen");
  body.classList.replace("space", "ghostlygreen");
  body.classList.replace("linkin-park", "ghostlygreen");
  body.classList.replace("lighterdarktheme", "ghostlygreen");
  body.classList.replace("dracula", "ghostlygreen");
  body.classList.replace("nord", "ghostlygreen");
  body.classList.replace("amazinglypurple", "ghostlygreen");
  body.classList.replace("lightplusplus", "ghostlygreen");
  body.classList.replace("highcontrast", "ghostlygreen");
  body.classList.replace("halloween", "ghostlygreen");
  localStorage.setItem("theme", "ghostlygreen");
};
