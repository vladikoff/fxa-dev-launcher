# fxa-dev-launcher

### Firefox Accounts Custom Profiles for Firefox

**Use `npm start` to start Firefox with local server configurations.**
Available options:

* `FXA_ENV=local` or `latest` or `stable` or `stage` or `prod` (NOTE: `local` is default). Any other value is treated as an FxA dev box: `FXA_ENV=vlad` will make Firefox talk to `vlad.dev.lcip.org`.
* `FIREFOX_BIN=/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin npm start`
* `FIREFOX_DEBUGGER=true` - open the [Browser Toolbox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox) on start (NOTE: `false` by default for speed).
* `FXA_DESKTOP_CONTEXT` - context value for the fxa-content-server: `context=[value]` (NOTE: `fx_desktop_v3` is default).
### Basic Usage Example in OS X

* `git clone https://github.com/vladikoff/fxa-dev-launcher.git`
* `cd fxa-dev-launcher`
* `npm i`
* `FXA_ENV=latest npm start`

The above will start a firefox talking to `latest.dev.lcip.org`
