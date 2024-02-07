//
// ========
// + RENDER.js +
// ========
//

const settingAbout = (z) => {
  $(z)
    .append(`<p class="settings-item-title">About</p><p class="settings-item-under-title description">About Saturn Startpage: New Features and Keyboard Shortcuts.</p>
            <div class="settings-background">
              <p class="new-about">
              <img style="padding-top:30px;" src="/assets/img/dynamic-icon-big.png" loading="lazy" title="Saturn Logo" alt="Saturn-logo.png" />
              <p style="text-align:center;font-size:23px;" class="settings-item-title">Saturn Startpage</p>
            <p style="text-align:center;margin-top:-15px;">
            <a  href="https://twitter.com/raifcoonjah" target="_blank">By <i class="la la-twitter"></i> Raif Coonjah</a>
<!--            <p style="color:red;text-align:center;">
            You are running a beta build of Saturn Startpage. If you experience any bugs please report them :D
            </p> -->
            <p style="text-align:center;"> 
            <a class="version-text green_background" href="https://github.com/raifcoonjah/Saturn-startpage/releases/" target="_blank"
            >7.2.0</i></a>
             </p>
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
            <a class="version-text green_background"
            >Release notes</i></a>
          </p>

          <h2>7.2</h2>

          <h3>Rewritten apps list</h3>
          <ul>
            <li>The apps list/apps shortcut has been completely rewritten from scratch with a completely new modernized backend that is now 100% JavaScript-based. We are no longer rendering HTML code from JavaScript.</li>
            <li>The design has also been tweaked slightly with some brand new animations, better scalability on smaller screens, and other minor changes.</li>
            <li>Most of the CSS code has been updated to modern standards.</li>
            <li>A future update will add blur.</li>
          </ul>
          
          <h3>New default font</h3>
          <ul>
            <li>Updated default font to Kanit for a contemporary and polished appearance.</li>
            <li>This change removed tons of unused font files, reducing overall size of the extension.</li>
            <li>Bumped font version from v7 -> v15.</li>
          </ul>
          
          <h3>Bug fixes:</h3>
          <ul>
            <li>Fix theme size inconsistency.</li>
            <li>Compress theme-icon to fix lag. (Decrease extension size by 500KB)</li>
            <li>Fix favorites long title bug, it is now limited to 25 characters.</li>
            <li>Fix removebtn hover effect not showing.</li>
            <li>Fix version number snippet.</li>
            <li>Fix processing_bg incorrect position creating user confusion.</li>
            <li>Fix default search icon not being used.</li>
            <li>Fix apps list on small screen.</li>
            <li>Other various bug fixes and stability improvements.</li>
          </ul>
          
          <h3>Performance and others</h3>
          
          <ul>
            <li>Added "ttl" parameter to favorites icon (unavatar.io): This parameter sets after how much time the icon should be refreshed and recached. The default is 24h, this commit increases this value to 28 days instead, reducing the amount of time the icons should be fetched from some unavatar.io servers.</li>
            <li>Note: This change will only apply to new favorites icons only.</li>
            <li>Focus icons now use lazy loading.</li>
            <li>Reduce username input bar size.</li>
            <li>All switches now use a smaller, more compact design.</li>
            <li>Several performance improvements.</li>
          </ul>
          
</div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<div class="settings-background">
            <p class="settings-item-title">Keyboard Shortcuts</p>
            <p class="settings-item-under-title description">Empower your workflow with keyboard shortcuts.</p>
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
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");

  // Load immediately onload
  // loader_immediately = setTimeout(function () {
  //   appsList(apps_list);
  // });

  // Load after 1.5 since the user won't see this page until they open settings.
  // Currently the time is set according to my tests but can adjusted in the future if needed.
  loader_delay = setTimeout(function () {
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
  }, 1500);
};

window.onload = render_in_js();
