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
              
                 <a href="https://docs.google.com">
                <div class="app">
                  <i class="las la-file-alt"></i>
                  <span>Google Docs</span>
                </div></a
              >

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
                <a href="https://lifeat.io">
                <div class="app">
                  <i class="las la-ticket-alt"></i>
                  <span>LifeAt</span>
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
                <h3>✨ What's new</h3>
                <p>
                Saturn 5 brings tons of new features, bug fixes and stability improvements. Learn more on
              <a href="https://github.com/mraif13/Saturn-startpage/releases/tag/v5.0.0"
                ><i class="lab la-github"></i> Github.</a
              > 
                </p>
              </div>
            <div class="settings-background">
              <h2 style="text-align: center; padding: 15px; font-weight: 500">
                About
              </h2>
              <p class="new-about">
              <img
                  src="/img/dynamic-icon-big.png"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
               <br/>
                Saturn Desktop: <a
                  href="https://github.com/mraif13/Saturn-startpage/releases/tag/v5.0.0"
                  target="_blank" 
                  >v5.0.0 | Build 4.9.32 <i class="las la-external-link-alt"></i
                ></a>
                <br />
                Help make saturn better
                <a
                  href="https://github.com/mraif13/Saturn-startpage/projects/1"
                  target="_blank" data-tootik="Thanks for your interest ❤️" data-tootik-conf="right"
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
                    <a href="https://paypal.me/raifs">
                      <div class="app">
                        <i class="las la-donate"></i>
                        <span>Donate</span>
                      </div></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<!-- + Keyboard Shortcuts section + -->
          <div id="tab-5" class="tab-content">
            <div class="settings-background">
              <h2 style="text-align: center; padding: 15px; font-weight: 500">
                Keyboard Shortcuts
              </h2>
              <p style="text-align: center">
                Shortcuts allows you to do things without ever needing to touch your <i class="las la-mouse"></i> mouse again.
              </p>
              <h4><i class="las la-home"></i> While on the home screen:</h4>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>/</kbd> to focus the search bar.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Arrow Up) to switch between search engines.</p>
              <p> Press <kbd>Shift</kbd> + <kbd>S</kbd> to open & close settings menu. </p>
              <h4><i class="las la-globe"></i> While anywhere:</h4>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to open add favorites menu. </p>
              <p> Press on <kbd>Esc</kbd> to close the both settings, favorites menu or to unfocus search bar.</p>
              <h4><i class="las la-icons"></i> Apps:</h4>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> to open <span style="font-weight: 700;">Github.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> to open <span style="font-weight: 700;">Youtube.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> to open <span style="font-weight: 700;">Reddit.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> to open <span style="font-weight: 700;">ProtonMail.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> to open <span style="font-weight: 700;">Twitter.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> to open <span style="font-weight: 700;">Google Calendar.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> to open <span style="font-weight: 700;">Gmail.</span></p>
            </div>
             <p style="text-align: center; font-weight: 500; font-size: 13px">
                <a
                  href="https://github.com/mraif13/Saturn-startpage/issues/new"
                  target="_blank"
                  ><i class="las la-keyboard"></i> Request a shortcut
                </a>
              </p>
          </div>`);
};

const favIcons = (fav) => {
  $(fav).append(`<div class="fav_ptgi">
            <ul class="fav_ptgi_category">
              <a
                href="https://simpleicons.org/"
                title="Get Simple icons.."
                target="_blank"
              >
                <li class="fav_ptgi_btn">Simple Icons</li></a
              >
              <a
                href="https://lineicons.com/icons"
                title="Get line icons.."
                target="_blank"
              >
                <li class="fav_ptgi_btn">Line Icons</li></a
              >
              <a
                href="https://icons8.com/line-awesome"
                title="Get line-awesome icons.."
                target="_blank"
              >
                <li class="fav_ptgi_btn">Line Awesome</li></a
              >
              <a
                href="https://mraif13.notion.site/How-to-use-the-new-Get-custom-icons-80dc51dad7604dffb99d9ab9e6997df2"
                target="_blank"
              >
                <li
                  class="fav_ptgi_btn"
                  data-tootik="What the f*ck is this?"
                  data-tootik-conf="right"
                >
                  <i class="lar la-question-circle"></i></li
              ></a>
            </ul>
          </div>`);
};

const render_in_js = (x, z, ks, cu) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");
  let fav_icons = $("#fav_icons");

  // pls dont break
  loader = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
    favIcons(fav_icons);
  });
};

window.onload = render_in_js();
