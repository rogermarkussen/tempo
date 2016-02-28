var getConfig = require('hjs-webpack')
var isLocalBuild = process.env.NODE_ENV === 'localproduction'

module.exports = getConfig({
  in: 'src/app.js',
  out: isLocalBuild ? 'localbuild' : 'public',
  isDev: true,
  clearBeforeBuild: true
})
