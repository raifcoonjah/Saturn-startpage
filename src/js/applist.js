// ____        _                                 _                _ _     _   
// / ___|  __ _| |_ _   _ _ __ _ __              / \   _ __  _ __ | (_)___| |_ 
// \___ \ / _` | __| | | | '__| '_ \   _____    / _ \ | '_ \| '_ \| | / __| __|
// ___) | (_| | |_| |_| | |  | | | | |_____|  / ___ \| |_) | |_) | | \__ \ |_ 
//|____/ \__,_|\__|\__,_|_|  |_| |_|         /_/   \_\ .__/| .__/|_|_|___/\__|
//                                                  |_|   |_|                

const apps_list = {

    "applist": [
      {
        "id": "app-1",
        "class": "app-content current",
        "apps": [
          {
            "href": "https://github.com",
            "class": "app",
            "content": {
              "i": "lab la-github",
              "span": "Github"
            }
          },
          {
            "href": "https://youtube.com",
            "class": "app",
            "content": {
              "i": "lab la-youtube",
              "span": "YouTube"
            }
          },
          {
            "href": "https://reddit.com",
            "class": "app programming_focus_mode",
            "content": {
              "i": "lab la-reddit",
              "span": "Reddit"
            }
          },
          {
            "href": "https://mail.protonmail.com",
            "class": "app",
            "content": {
              "i": "las la-inbox",
              "span": "Proton Mail"
            }
          },
          {
            "href": "https://mail.google.com",
            "class": "app",
            "content": {
              "i": "las la-envelope",
              "span": "Gmail"
            }
          }
        ]
      },
      {
        "id": "app-2",
        "class": "app-content",
        "apps": [
          {
            "href": "https://docs.google.com",
            "class": "app",
            "content": {
              "i": "las la-file-alt",
              "span": "Google Docs"
            }
          },
          {
            "href": "https://udemy.com",
            "class": "app",
            "content": {
              "i": "las la-chalkboard-teacher",
              "span": "Udemy"
            }
          }
        ]
      },
      {
        "id": "app-3",
        "class": "app-content",
        "apps": [
          {
            "href": "https://instagram.com",
            "class": "app",
            "content": {
              "i": "lab la-instagram",
              "span": "Instagr.."
            }
          },
          {
            "href": "https://twitter.com",
            "class": "app",
            "content": {
              "i": "lab la-twitter",
              "span": "Twitter"
            }
          }
        ]
      },
      {
        "id": "app-4",
        "class": "app-content",
        "apps": [
          {
            "href": "https://youtube.com",
            "class": "app",
            "content": {
              "i": "lab la-youtube",
              "span": "YouTube"
            }
          },
          {
            "href": "https://netflix.com",
            "class": "app programming_focus_mode",
            "content": {
              "i": "las la-film",
              "span": "Netflix"
            }
          },
          {
            "href": "https://twitch.tv",
            "class": "app programming_focus_mode",
            "content": {
              "i": "lab la-twitch",
              "span": "Twitch"
            }
          }
        ]
      }
    ]
  };

  const appListDiv = document.getElementById("apps_list");

  apps_list.applist.forEach(function(appContent) {
    const appContentDiv = document.createElement("div");
    appContentDiv.id = appContent.id;
    appContentDiv.className = appContent.class;

    appContent.apps.forEach(function(app) {
      const appAnchor = document.createElement("a");
      appAnchor.href = app.href;

      const appDiv = document.createElement("div");
      appDiv.className = app.class;

      const appIcon = document.createElement("i");
      appIcon.className = app.content.i;

      const appText = document.createElement("span");
      appText.textContent = app.content.span;

      appDiv.appendChild(appIcon);
      appDiv.appendChild(appText);
      appAnchor.appendChild(appDiv);
      appContentDiv.appendChild(appAnchor);
    });

    appListDiv.appendChild(appContentDiv);
  });