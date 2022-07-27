//
// ========
// + RENDER.js +
// ========
//
const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content">
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
                <a href="https://lifeat.io/app">
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
              <p class="settings-item-title">About</p>
              <p class="settings-item-under-title description">About Saturn startpage.</p>
            <div class="settings-background">
              <p class="new-about">
              <img
                  src="/img/dynamic-icon-big.png"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
               <br/>
                Saturn Desktop: <a
                  href="https://github.com/mraif13/Saturn-startpage/releases/tag/v5.2.0"
                  target="_blank" 
                  >v5.2.0 (BETA v5.1.85)<i class="las la-external-link-alt"></i
                ></a>
                <br />
                Help make saturn better
                <a
                  href="https://github.com/mraif13/Saturn-startpage/projects/1"
                  target="_blank"
                  >Contribute<i class="las la-external-link-alt"></i
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
             <p class="settings-item-title">What's new</p>
            <p class="settings-item-under-title description">Learn what's new in this release.</p>
            <div class="settings-background"> 
            

            <h2><i class="las la-meteor"></i> v5.2 (5.1.85)</h2>
            <p class="description">Stability, new features & bug fixes!</p>

<code> * Added a prompt before deleting user data. <br/>
* Added prompt before deleting wallpaper.<br/>
* Minor user experience improvements. </code>
            </div>


          </div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<!-- + Keyboard Shortcuts section + -->
          <div id="tab-5" class="tab-content">
            <p class="settings-item-title">Keyboard Shortcuts</p>
            <p class="settings-item-under-title description">Shortcuts allow you to do things without ever needing to touch your 
            <i class="las la-mouse"></i> mouse again.</p>
            <div class="settings-background">
              <h4>General</h4>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>/</kbd> to focus the search bar.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Arrow Up) to switch between search engines.</p>
              <p> Press <kbd>Shift</kbd> + <kbd>S</kbd> to open & close settings menu. </p>
              <p></p>
              <p> Press <kbd>Shift</kbd> + <kbd>Z</kbd> to open add favorites menu. </p>
              <p> Press <kbd>Shift</kbd> + <kbd>B</kbd> to open soundboard. </p>
              <p> Press on <kbd>Esc</kbd> to close any modal.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>M</kbd> to mute audio. (Provided by Firefox) </p>
              <h4>Apps</h4>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> to open <span style="font-weight: 700;">Github.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> to open <span style="font-weight: 700;">Youtube.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> to open <span style="font-weight: 700;">Reddit.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> to open <span style="font-weight: 700;">ProtonMail.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> to open <span style="font-weight: 700;">Twitter.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> to open <span style="font-weight: 700;">Google Calendar.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> to open <span style="font-weight: 700;">Gmail.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> to open <span style="font-weight: 700;">Instagram.</span></p>
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
                  data-tootik="Refer to the guide for more info."
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
