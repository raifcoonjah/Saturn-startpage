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
                This release includes the brand new Home v2 that include quotes, tons of speed improvements, better time viewing experience and bug fixes. 
                Read the full release note on
              <a href="https://github.com/mraif13/Saturn-startpage/releases/tag/v5.0.0"
                ><i class="lab la-github"></i> Github.</a
              >
                </p>
              </div>
            <div class="settings-background">
              <h2 style="text-align:center;padding:15px;">About</h2>
              <p class="new-about">
              <img
                  src="/img/dynamic-icon-big.png"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
               <br/>
                <a
                  href="https://github.com/mraif13/Saturn-startpage/releases/tag/v5.0.0"
                  target="_blank" 
                  >v5.0.0 <i class="las la-external-link-alt"></i
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
                  </div>
                </div>
              </div>
            </div>
          </div>`);
};

const render_in_js = (x, z) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");

  // pls dont break
  iLoadthings = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
  });
};
window.onload = render_in_js();
