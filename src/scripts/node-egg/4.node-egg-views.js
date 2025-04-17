// config/config.default.js
const path = require('path')

module.exports = appInfo => {
  const config = {}

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
    defaultViewEngine: 'ejs',
    mapping: {
      '.ejs': 'ejs'
    }
  }
  
  return config
}

// config/plugin.js
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
}
