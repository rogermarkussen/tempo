var getConfig = require('hjs-webpack')
var isDev = process.env.NODE_ENV !== 'production'

module.exports = getConfig({
  in: 'src/index.js',
  out: 'public',
  output: {
    filename: 'app.js'
  },
  isDev: isDev,
  html: false,
  clearBeforeBuild: '!*.html'
})
