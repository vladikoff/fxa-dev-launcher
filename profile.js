var path = require('path');
var chalk = require('chalk');

var CONFIGS = {
  'local': 'http://127.0.0.1:3030',
  'latest': 'https://latest.dev.lcip.org',
  'stable': 'https://stable.dev.lcip.org',
  'stage': 'https://accounts.stage.mozaws.net',
  'prod': 'https://accounts.firefox.com'
};

var env = process.env.FXA_ENV || 'local';
var fxaEnv = CONFIGS[env];

if (! fxaEnv) {
  // If env is not found in the above list, assume it's an fxa-dev box.
  fxaEnv = 'https://' + env + '.dev.lcip.org';
}

var fxaProfile = {
  // enable debugger and toolbox
  'devtools.chrome.enabled': true,
  'devtools.debugger.remote-enabled': true,
  'devtools.debugger.prompt-connection': false,
  // disable about:config warning
  'general.warnOnAboutConfig': false,
  // identity logs
  'identity.fxaccounts.log.appender.dump': 'Debug',
  'identity.fxaccounts.loglevel': 'Debug',
  'services.sync.log.appender.file.logOnSuccess': true,
  'services.sync.log.appender.console': 'Debug',
  'services.sync.log.appender.dump': 'Debug',
  'identity.fxaccounts.allowHttp': true,
  'identity.fxaccounts.autoconfig.uri': fxaEnv,
  // disable auto update
  'app.update.auto': false,
  'app.update.enabled': false
};

console.log(chalk.yellow('Configuration:', fxaEnv));
console.log(chalk.yellow('FXA_ENV:', env));
console.log(chalk.yellow('FIREFOX_BIN Binary:', process.env.FIREFOX_BIN || 'Default System Firefox binary'));
console.log(chalk.yellow('FIREFOX_DEBUGGER:', !! process.env.FIREFOX_DEBUGGER));

module.exports = fxaProfile;
