var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: true,
  clearBeforeBuild: true
})
