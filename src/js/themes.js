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
// v3.0
// ========
//
const ThemeButtonIDS = [
  "light",
  "dark",
  "lightplusplus",
  "space",
  "halloween",
  "amazinglypurple",
  "linkin-park",
  "lighterdarktheme",
  "dracula",
  "nord",
  "ghostlygreen",
  "highcontrast",
];

const theme_choice = ThemeButtonIDS.map((id) => document.getElementById(id));
const body = document.body;

const setTheme = (theme) => {
  body.setAttribute("class", "");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
  theme_choice.forEach((button) => (button.style.outline = ""));
  document.getElementById(theme).style.outline =
    "4px solid var(--bg-accent-color-lr-hover)";
  document.body.style.transition = "0.2s ease-in";
};

const themeApplied = localStorage.getItem("theme");
if (themeApplied) {
  body.classList.add(themeApplied);
  document.theme_choice;
  document.getElementById(themeApplied).style.outline =
    "4px solid var(--bg-accent-color-lr)";
} else {
  body.classList.add("light");
}

theme_choice.forEach((button) =>
  button.addEventListener("click", () => setTheme(button.id))
);
