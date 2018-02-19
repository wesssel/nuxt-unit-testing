const hooks = require('require-extension-hooks')
const env = require('browser-env')

if (process.env.TEST === 'unit') {
  env()
}

hooks('vue').plugin('vue').push()
hooks(['vue', 'js']).plugin('babel').push()
