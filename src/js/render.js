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
            <p style="color:red">
            </p>
            <p style="text-align:center;"> 
            <a class="version-text green_background" href="https://github.com/raifcoonjah/Saturn-startpage/releases/" target="_blank"
            >7.2</i></a>
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

          <ul>
          <h2>## title </h2>

          <h3>## title</h3>
          <li>
content
          </li>
          <li>
          </li>
          <h3> ## title</h3>
          <li>
          content
          </li>
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
