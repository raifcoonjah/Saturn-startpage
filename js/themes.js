//
//
// ========
//
//░██████╗░█████╗░████████╗██╗░░░██╗██████╗░███╗░░██╗  ████████╗██╗░░██╗███████╗███╗░░░███╗███████╗░██████╗
//██╔════╝██╔══██╗╚══██╔══╝██║░░░██║██╔══██╗████╗░██║  ╚══██╔══╝██║░░██║██╔════╝████╗░████║██╔════╝██╔════╝
//╚█████╗░███████║░░░██║░░░██║░░░██║██████╔╝██╔██╗██║  ░░░██║░░░███████║█████╗░░██╔████╔██║█████╗░░╚█████╗░
//░╚═══██╗██╔══██║░░░██║░░░██║░░░██║██╔══██╗██║╚████║  ░░░██║░░░██╔══██║██╔══╝░░██║╚██╔╝██║██╔══╝░░░╚═══██╗
//██████╔╝██║░░██║░░░██║░░░╚██████╔╝██║░░██║██║░╚███║  ░░░██║░░░██║░░██║███████╗██║░╚═╝░██║███████╗██████╔╝
//╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚══════╝╚═════╝░
// v2.5.2023
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


// Applied theme from cache 
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
} else if (theme === null) {
  body.classList.add("light");
}

// lightplusplus theme
LightPlusPlusButton.onclick = () => {
  body.setAttribute("class", ""); // Clear any previous class
  body.classList.add("lightplusplus"); // Add theme class to body
  localStorage.setItem("theme", "lightplusplus"); // Store dem in da localstorage
};

// Amazingly purple theme
amazinglypurple.onclick = () => {
  body.classList.add("amazinglypurple");
  localStorage.setItem("theme", "amazinglypurple");
};

// Dark theme
darkButton.onclick = () => {
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

// Default light theme
lightButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("light");
  localStorage.setItem("theme", "light");
};

// Material-ish dark theme
spaceButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("space");
  localStorage.setItem("theme", "space");
};

// LinkinPark theme
linkinParkButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("linkin-park");
  localStorage.setItem("theme", "linkin-park");
};

// Lighter Grey ish theme theme
lighterdark_theme_button.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("lighterdarktheme");
  localStorage.setItem("theme", "lighterdarktheme");
};

// Dracula theme (beta)
draculaButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("dracula");
  localStorage.setItem("theme", "dracula");
};

// Nord theme (beta)
nordButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("nord");
  localStorage.setItem("theme", "nord");
};

highcontrast.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("highcontrast");
  localStorage.setItem("theme", "highcontrast");
};

halloweenButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("halloween");
  localStorage.setItem("theme", "halloween");
};

ghostlygreenButton.onclick = () => {
  body.setAttribute("class", "");
  body.classList.add("ghostlygreen");
  localStorage.setItem("theme", "ghostlygreen");
};
