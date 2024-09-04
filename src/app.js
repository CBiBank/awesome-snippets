const path = require('node:path')
const fs = require('node:fs')
const nodeFilePath = path.resolve(__dirname, '../snippets/node.code-snippets')

const nodeSnippets = require('./scripts/node')

try {
  fs.writeFileSync(nodeFilePath, JSON.stringify(nodeSnippets, null, 2))
  console.log(`Write File Successfully`)
} catch (e) {
  console.log(e)
}
