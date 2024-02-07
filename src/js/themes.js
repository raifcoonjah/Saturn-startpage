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
const themesData = [
  {
    id: "light",
    iconSrc: "/assets/img/themes/light.png",
    loading: "lazy",
    alt: "light-icon.png",
    name: "Cancri",
  },
  {
    id: "lighterdarktheme",
    iconSrc: "/assets/img/themes/lightdark.png",
    loading: "lazy",
    alt: "lighterdark-icon.png",
    name: "Light grey",
  },
  {
    id: "dracula",
    iconSrc: "/assets/img/themes/dracula.png",
    loading: "lazy",
    title: "Dracula theme",
    alt: "dracula-icon.png",
    name: "Dracula",
  },
  {
    id: "nord",
    iconSrc: "/assets/img/themes/nord.png",
    loading: "lazy",
    title: "Nord theme",
    alt: "nord-icon.png",
    name: "Nord",
  },
  {
    id: "amazinglypurple",
    iconSrc: "/assets/img/themes/amazinglypurple.png",
    loading: "lazy",
    title: "Experimental theme",
    alt: "experimental-icon.png",
    name: "Simply purple",
  },
  {
    id: "ghostlygreen",
    iconSrc: "/assets/img/themes/ghostlygreen.png",
    loading: "lazy",
    title: "Ghostly green theme",
    alt: "ghostlygreen-icon.png",
    name: "👻 Ghostly green",
  },
  {
    id: "dark",
    iconSrc: "/assets/img/themes/dark.png",
    loading: "lazy",
    title: "Dark theme",
    alt: "darktheme-icon.png",
    name: "Cancri Dark",
  },
  {
    id: "highcontrast",
    iconSrc: "/assets/img/themes/highcontrast.png",
    loading: "lazy",
    title: "Dark theme",
    alt: "highconstrast-icon.png",
    name: "High contrast",
  },
  {
    id: "space",
    iconSrc: "/assets/img/themes/space.png",
    loading: "lazy",
    title: "Space dark theme",
    alt: "spacedark-icon.png",
    name: "Space dark",
  },
  {
    id: "halloween",
    iconSrc: "/assets/img/themes/halloween.png",
    loading: "lazy",
    title: "Halloween theme",
    alt: "halloween-icon.png",
    name: "Halloween",
  },
  {
    id: "terminal",
    iconSrc: "/assets/img/themes/terminal.png",
    loading: "lazy",
    title: "Terminal theme",
    alt: "terminal-icon.png",
    name: "Terminal",
  },
  {
    id: "linkin-park",
    iconSrc: "/assets/img/themes/rock-legend.png",
    loading: "lazy",
    title: "Experimental theme",
    alt: "experimental-icon.png",
    name: "Linkin Park",
  },
  {
    id: "lightplusplus",
    iconSrc: "/assets/img/themes/light.png",
    loading: "lazy",
    alt: "light-icon.png",
    name: "Modern (Beta)",
  },
];


      // Function to generate the HTML for themes based on the data
      function generateThemesHTML(data) {
          let html = "";

          data.forEach((theme) => {
              html += `
                  <div class="theme-container" id="${theme.id}">
                      <img class="theme-icon" src="${theme.iconSrc}" loading="${theme.loading}" alt="${theme.alt}" />
                      <span class="theme-name">${theme.name}</span>
                  </div>
              `;
          });

          return html;
      }

      // Get the container element and populate it with the generated HTML
      const themesContainer = document.getElementById("themes-container");
      themesContainer.innerHTML = generateThemesHTML(themesData);

      // Theme selection code (your existing code)
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
          "terminal",
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
          document.body.style.transition = "0.3s ease-in";
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
