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
  $(z).append(`
              <p class="settings-item-title">About</p>
              <p class="settings-item-under-title description">About Saturn Startpage & What's new.</p>
            <div class="settings-background">
              <p class="new-about">
              <img 
              style="margin-left: auto;
              padding-top:30px;
              margin-right: auto;
              display: block;"
                  src="/assets/img/dynamic-icon-big.png"
                  loading="lazy"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
            <p style="text-align:center;font-size:23px;" class="settings-item-title">Saturn Startpage</p>
            <p style="text-align:center;font-weight:500;margin-top:-15px;">
            <a  href="https://twitter.com/raifcoonjah" target="_blank">By <i class="la la-twitter"></i> Raif Coonjah</a>
            </p>
               <p style="text-align:center;"> 
               <a class="version-text green_background"
               href="https://github.com/raifcoonjah/Saturn-startpage/releases/tag/v6.5.0"
               target="_blank" 
               >v6.4.1 -> 6.5.0</i></a>
                </p>
              <div class="socials">
                <div class="aboutwidgets">
                <a href="https://saturnstartpage.netlify.app/" class="aboutwidgets-container">
                Get chromium version (Beta)
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
            >Saturn v6.5.0 - Beta 1</i></a>
          </p>
            <p style="text-align:center;"> 
            <a class="version-text"
            >Updated on: 25/06/2023</i></a>
          </p>

          <ul>
          v6.4.80 - Settings Redesign
          <li>
          - Settings has been entirely rewritten and redesigned. This redesign includes several new UI changes such as Blur, a new menu design and several user experience
          enhancements. <br/>
          - Settings is now a sidebar instead of a modal, which makes thing much easier to maintain and improve in the long run. <br/>
          - This beta includes a very early version of the new Settings sidebar. <br/>
          ---- <br/>
          What works and what doesn't
          ---- <br/>
          - Keyboard shortcut to open settings is not working.  <br/>
          - The button is not appearing on smaller screens. <br/>
          - When pressing "Delete it all" button, the sidebar closes instantly. <br/>
          - Every old settings tab was migrated over to the new settings page. <br/>

          </ul>
          <ul>
          v6.4.1 - Mobile improvements
          <li>
          - Attempt to fix a bug that caused drop down buttons to become blocked. <br/>
          - Reduce upload image size from 5MB to 4MB. <br/>
          - Minimalistic UI now reloads the page, this alone should fix tons of small bugs and improve the experience. (Will change this back to no-reload in the next major release)<br/>
          - Clean up processing_bg text. <br/>
          - Improve UX when deleting a background. <br/>
          - Remove "Google calendar" option from drop down menu. <br/>
          - Fix wrong background icon. <br/>
          - Added dropshadow behind settings content background & made some other small improvements too. 
          - Drastically improved the experience for mobile users including several ios specific fixes. 
          </li>
          </ul>
</div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<!-- + Keyboard Shortcuts section + -->
          <div class="settings-background">
            <p class="settings-item-title">Keyboard Shortcuts</p>
            <p class="settings-item-under-title description">Shortcuts allow you to do things without ever needing to touch your 
            <i class="las la-mouse"></i> mouse again.</p>
            <div class="settings-background">
              <p class="dropdown-seperator settings-seperator">
                <span>General</span>
              </p>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>/</kbd> to focus the search bar.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Arrow Up) to switch between search engines.</p>
              <p> Press <kbd>Shift</kbd> + <kbd>S</kbd> to open & close settings menu. </p>
              <p></p>
              <p> Press <kbd>Shift</kbd> + <kbd>Z</kbd> to open add favorites menu. </p>
              <p> Press <kbd>Shift</kbd> + <kbd>B</kbd> to open soundboard. </p>
              <p> Press on <kbd>Esc</kbd> to close any modal.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>M</kbd> to mute audio. (Provided by Firefox) </p>
              <p class="dropdown-seperator settings-seperator">
                <span>Applications</span>
              </p>
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

const render_in_js = (x, z, ks, cu) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");

  // pls dont break
  loader = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
  });
};

window.onload = render_in_js();
