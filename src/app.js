const path = require('node:path')
const fs = require('node:fs')

const nodeFilePath = path.resolve(__dirname, '../snippets/node.code-snippets')
const nodeSnippets = require('./scripts/node')

const nodeExpressFilePath = path.resolve(__dirname, '../snippets/node-express.code-snippets')
const nodeExpressSnippets = require('./scripts/node-express')

const nodeToolFilePath = path.resolve(__dirname, '../snippets/node-tool.code-snippets')
const nodeToolSnippets = require('./scripts/node-tool')

try {
  fs.writeFileSync(nodeFilePath, JSON.stringify(nodeSnippets, null, 2))
  fs.writeFileSync(nodeToolFilePath, JSON.stringify(nodeToolSnippets, null, 2))
  console.log(`Write File Successfully`)
} catch (e) {
  console.log(e)
}
