const fs = require('node:fs')
const path = require('node:path')
const { getSuggestion, transformJsToArray } = require('../../utils')
const filePath = path.resolve(__dirname, './1.node-express.js')
const snippetsPath = path.resolve(__dirname, '../../../snippets/node-express.code-snippets')

const snippets = getSuggestion({
  prop: 'node.express',
  prefix: 'node-express',
  body: transformJsToArray(filePath),
  description: 'Code Snippets For Node Express.'
})

fs.writeFileSync(snippetsPath, JSON.stringify(snippets, null, 2))
