// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR.

const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content current">
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
        </div>
        
        <div id="app-2" class="app-content">
          <div class="popup">
            <div id="apps">
              <a href="http://moodle.rbs.ac.mu/moodle/">
                <div class="app">
                  <i class="las la-school"></i>
                  <span>Rushm.. Moodle</span>
                </div></a>  
              <a href="https://udemy.com">
                <div class="app">
                  <i class="las la-chalkboard-teacher"></i>
                  <span>Udemy</span>
                </div></a>
              <a href="https://learn-anything.xyz/">
                <div class="app">
                  <i class="lar la-map"></i>
                  <span>Learn Anything</span>
                </div></a
              >
              <a href="https://docs.google.com">
                <div class="app">
                  <i class="las la-file-alt"></i>
                  <span>Google Docs</span>
                </div></a
              >
              <a href="https://www.litcharts.com/">
                <div class="app">
                  <i class="las la-book"></i>
                  <span>Litcharts</span>
                </div></a
              >
            </div>
          </div>
        </div>

        <div id="app-3" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://instagram.com">
                  <div class="app">
                    <i class="lab la-instagram"></i>
                    <span>Instagr..</span>
                  </div></a
                >
                <a href="https://twitter.com">
                  <div class="app">
                    <i class="lab la-twitter"></i>
                    <span>Twitter</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
        
                <div id="app-4" class="app-content">
          <div class="popup">
            <div class="popup">
              <div class="popup">
                <div id="apps">
                  <a href="https://youtube.com">
                    <div class="app">
                      <i class="lab la-youtube"></i>
                      <span>YouTube</span>
                    </div></a
                  >
                  <a href="https://netflix.com">
                    <div class="app">
                      <i class="las la-film"></i>
                      <span>Netflix</span>
                    </div></a
                  >
                  <a href="https://twitch.tv">
                    <div class="app">
                      <i class="lab la-twitch"></i>
                      <span>Twitch</span>
                    </div></a
                  >
                  <a href="https://www.lofi.cafe/">
                    <div class="app">
                      <i class="las la-record-vinyl"></i>
                      <span>Lofi Cafe</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>`);
};

const settingAbout = (z) => {
  $(z).append(`<div id="tab-3" class="tab-content">
            <div class="settings-background">
              <h2 style="text-align:center;padding:15px;">About</h2>
              <p class="new-about">
              <img
                  src="/img/dynamic-icon-big.png"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
               <br/>
                Saturn version:
                <a
                  href="https://github.com/mraif13/Saturn-startpage/releases/tag/v4.3.0"
                  target="_blank"
                  >v4.3.0 RC1 <i class="las la-external-link-alt"></i
                ></a>
                <br />
                Help make saturn better
                <a
                  href="https://github.com/mraif13/Saturn-startpage/projects/1"
                  target="_blank"
                  >Contribute <i class="las la-external-link-alt"></i
                ></a>
                </p>
              <div class="socials">
                <div class="popup aboutwidgets">
                  <div id="apps">
                    <a href="https://github.com/mraif13/saturn-startpage">
                      <div class="app">
                        <i class="las la-code"></i>
                        <span>Source code</span>
                      </div></a
                    >
                      <a href="https://github.com/mraif13/saturn-startpage/">
                      <div class="app">
                        <i class="lar la-star"></i>
                        <span>Star on Github</span>
                      </div></a
                    >
                      <a href="https://github.com/mraif13/Saturn-startpage/tree/master#data-whats-that">
                      <div class="app" id="tab-2" class="tab-content slide-up-fade-in">
                        <i class="las la-user-secret"></i>
                        <span>Privacy</span>
                      </div></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>`);
};

const whatsNewSection = (w) => {
  $(w).append(`<ul class="whatsnew">
                <h4>✨ New features: </h4>
                <li>
                  » Saturn now natively supports SVG icons.
                  <br />
                  » Added "Get custom icons", this is a list of natively
                  supported custom icons that you can add to your favorites. You
                  can learn more by clicking the "<i
                    class="lar la-question-circle"
                  ></i
                  >" inside favorites.
                  <br />
                  » Settings navigation now includes an indicator on the left to
                  indicate the current tab.
                  <br />
                  » Instead of using a text popup, saturn now has a snackbar
                  feature that will showup when adding a new favorites or saving
                  your username.
                  <br />
                  » Favorite modal is now much smaller in size to save screen
                  space.
                  <br />
                  » This release includes a much cleaner and more organized
                  index.html file to improve experience when adding new
                  features.
                  <br />
                  » Added a new "What's new section" inside settings. [You're
                  viewing it right now :D]
                  <br />
                  » K-shortcuts got a small design update.
                  <br />
                  » Added a border hover effect when the user hovers over the
                  "IOS like" settings background. [BETA]
                  <br />
                  » Favorites will include new icons that should the user
                  understand what they do. [Applies to only new favorites]
                </li>
                              <br />
                <p class="line"></p>
                <h4>🐞 Bug fixes:</h4>
                <li>
                  » Fix various weird border issues.
                  <br />
                  » Fix a strange inconsistency issues related to icons
                  background [Settings navigation]
                  <br />
                  » Fix SVG icons not switching to a light color when a dark
                  theme is applied.
                  <br />
                  » Fix tons of margin issues.
                  <br />
                  » Fix cancel button border issue.
                  <br />
                  » Fix save button not switching to a lighter color when you
                  hover on them.
                  <br />
                  » Fix kdb (keyboard keys) not properly changing color when a
                  light theme is applied.
                  <br />
                  » Removed all border-radius that were previously applied to
                  favorites images/icons.
                  <br />
                  » Fix kdb (keyboard keys) not properly changing color when a
                  light theme is applied.
                  <br />
                  » Removed tons of break code that were used inside the
                  index.html in favor of css alternatives.
                  <br />
                  » Other various user experience improvements and bug fixes! 
                </li>
              </ul>`);
};

const render_in_js = (x, z, w) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let whats_newsection = $("#whats_new");

  // pls dont break
  iLoadthings = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
    whatsNewSection(whats_newsection);
  });
};
window.onload = render_in_js();
