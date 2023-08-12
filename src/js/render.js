//
// ========
// + RENDER.js +
// ========
//
const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content current">
          <div class="popup">
            <div id="apps">
              <a href="https://github.com">
                <div class="app study_focus_mode relaxation_focus_mode">
                  <i class="lab la-github"></i>
                  <span>Github</span>
                </div></a
              >
              <a href="https://youtube.com">
                <div class="app study_focus_mode">
                  <span>YouTube</span>
                  <i class="lab la-youtube"></i></div
              ></a>
              <a href="https://reddit.com">
                <div class="app study_focus_mode programming_focus_mode">
                  <span>Reddit</span>
                  <i class="lab la-reddit"></i></div
              ></a>
              <a href="https://mail.protonmail.com">
                <div class="app relaxation_focus_mode">
                  <span>Proton Mail </span>
                  <i class="las la-inbox"></i></div
              ></a>

              <a href="https://mail.google.com">
                <div class="app relaxation_focus_mode">
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
                    <div class="app programming_focus_mode">
                      <i class="las la-film"></i>
                      <span>Netflix</span>
                    </div></a
                  >
                  <a href="https://twitch.tv">
                    <div class="app programming_focus_mode">
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
  $(z)
    .append(`<p class="settings-item-title">About</p><p class="settings-item-under-title description">About Saturn Startpage, what's new and Keyboard shortcuts.</p>
            <div class="settings-background">
              <p class="new-about">
              <img style="padding-top:30px;" src="/assets/img/dynamic-icon-big.png" loading="lazy" title="Saturn Logo" alt="Saturn-logo.png" />
              <p style="text-align:center;font-size:23px;" class="settings-item-title">Saturn Startpage</p>
            <p style="text-align:center;margin-top:-15px;">
            <a  href="https://twitter.com/raifcoonjah" target="_blank">By <i class="la la-twitter"></i> Raif Coonjah</a>
            </p>
               <a class="version-text green_background" href="https://github.com/raifcoonjah/Saturn-startpage/releases/tag/#" target="_blank"> v6.9.86</i></a>
              <div class="socials">
                <div class="aboutwidgets">
                <a href="https://saturnstartpage.netlify.app/" class="aboutwidgets-container">
                Get other versions
                <i class="las la-external-link-alt"></i>
                </a>
                <a href="https://github.com/raifcoonjah/Saturn-startpage/tree/master" class="aboutwidgets-container lk_container_top">
                Source Code
                <i class="las la-external-link-alt"></i>
                </a>

                <a href="https://github.com/raifcoonjah/Saturn-startpage/" class="aboutwidgets-container lk_container_bottom">
                Contribute
                <i class="las la-external-link-alt"></i>
                </a>

                <a href="https://github.com/raifcoonjah/Saturn-startpage/tree/master#data-whats-that" class="aboutwidgets-container">
                Privacy
                <i class="las la-external-link-alt"></i>
                </a>
                </div>
              </div>
             <p style="text-align: center; font-weight: 500; font-size: 13px">
             Thank you for using Saturn startpage.
              </p>
            </div>
            
          <p class="settings-item-title">What's new</p>
          <p class="settings-item-under-title description">Learn what's new in this release.</p>
          <div class="settings-background"> 
          <img style="margin-left: auto; padding-top:30px; margin-right: auto; display: block;" src="/assets/img/version.png" loading="lazy" />
          <p style="text-align:center;"> 
            <a class="version-text red_background"
            >Saturn v6.9.86 - Beta 2</i></a>
          </p>

          <ul>
          <h5> Maybe check back later :P </h5>
          </ul>
</div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<div class="settings-background">
            <p class="settings-item-title">Keyboard Shortcuts</p>
            <p class="settings-item-under-title description">Shortcuts allow you to do things without ever needing to touch your 
            <i class="las la-mouse"></i> mouse again.</p>
            <div class="settings-background">
              <p class="dropdown-seperator settings-seperator">
                <span>General</span>
              </p>
              <ul>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>/</kbd> to focus the search bar.
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Arrow Up) to switch between search engines.
              </li>
              <li> 
              Press <kbd>Shift</kbd> + <kbd>S</kbd> to open & close settings.
              </li>
              <li> 
              Press <kbd>Shift</kbd> + <kbd>Z</kbd> to open add favorites menu.
              </li>
              <li> 
              Press on <kbd>Esc</kbd> to close any modal.
              </li>
              <p class="dropdown-seperator settings-seperator">
                <span>Applications</span>
              </p>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> to open <span style="font-weight: 700;">Github.</span>
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> to open <span style="font-weight: 700;">Youtube.</span>
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> to open <span style="font-weight: 700;">Reddit.</span>
              </li>  
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> to open <span style="font-weight: 700;">ProtonMail.</span>
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> to open <span style="font-weight: 700;">Twitter.</span>
              </li>
              <li> 
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> to open <span style="font-weight: 700;">Google Calendar.</span>
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> to open <span style="font-weight: 700;">Gmail.</span>
              </li>
              <li>
              Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> to open <span style="font-weight: 700;">Instagram.</span>
              </li>
              </ul>
            </div>
          </div>`);
};

const render_in_js = (x, z, ks, cu) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");

  // Load immediately onload
  loader_immediately = setTimeout(function () {
    appsList(apps_list);
  });

  // Load after 1.5 since the user won't see this page until they open settings.
  // Currently the time is set according to my tests but can adjusted in the future if needed.
  loader_delay = setTimeout(function () {
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
  }, 1500);
};

window.onload = render_in_js();
