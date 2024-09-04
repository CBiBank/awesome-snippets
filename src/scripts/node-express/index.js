const fs = require('node:fs')
const path = require('node:path')
const { globSync } = require('glob')
const { getSuggestion, transformJsToArray, transformSymbol, upperCaseFirst } = require('../../utils')

const files = globSync('src/scripts/node-express/**/*', { nodir: true })
const filenames = files.map(file => path.basename(file)).filter(file => file !== 'index.js')
const filenameRegExp = /^\d+\.(.+)\.js$/

const snippets = {}
filenames.forEach(filename => {
  const matches = filename.match(filenameRegExp)
  const prefix = matches[1]
  const prop = upperCaseFirst(transformSymbol(prefix))
  const suggestion = getSuggestion({
    prefix,
    body: transformJsToArray(path.resolve(__dirname, `./${filename}`)),
    description: `Code Snippets For ${prop}.`
  })
  snippets[prop] = suggestion
  return suggestion
})

module.exports = snippets
