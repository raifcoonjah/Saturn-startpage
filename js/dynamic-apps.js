//
// ========
// + Dynamic apps - Saturn Startpage +
// + Last updated on: 3/22/22 +
// + Apps here are dynamic and can be added or removed from the list without updates. +
// + A PR is required for every addition. +
// ========
//

const customAppsList = (cu) => {
  $(cu).append(`<div id="app-5" class="app-content">
          <div class="popup">
            <div id="apps">
              <a href="https://github.com">
                <div class="app">
                  <i class="lab la-github"></i>
                  <span>Github</span>
                </div></a
              >
              <a href="https://youtube.com">
                <div class="app">
                  <span>YouTube</span>
                  <i class="lab la-youtube"></i></div
              ></a>
              <a href="https://reddit.com">
                <div class="app">
                  <span>Reddit</span>
                  <i class="lab la-reddit"></i></div
              ></a>
              <a href="https://mail.protonmail.com">
                <div class="app">
                  <span>Proton Mail </span>
                  <i class="las la-inbox"></i></div
              ></a>

              <a href="https://mail.google.com">
                <div class="app">
                  <span>Gmail</span>
                  <i class="las la-envelope"></i></div
              ></a>
            </div>
          </div>
          <h6> Apps found here are loaded from the dynamic-apps.js file found inside the github repo.</h6>
        </div>`);
};

const render_in_js_server = (cu) => {
  let custom_apps_list = $("#custom_apps_list");

  // pls dont break
  loader_server = setTimeout(function () {
    customAppsList(custom_apps_list);
  });
};

window.onload = render_in_js_server();
