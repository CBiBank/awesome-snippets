const path = require('node:path')
const { globSnippets } = require('../../utils/glob')

module.exports = globSnippets({
  dirname: __dirname
}, {
  pattern: 'src/scripts/node-tool/**/*',
  nodir: true
})
