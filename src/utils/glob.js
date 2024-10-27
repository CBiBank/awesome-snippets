const fs = require('node:fs')
const path = require('node:path')
const { globSync } = require('glob')
const { getSuggestion, transformJsToArray, transformSymbol, upperCaseFirst } = require('./index.js')

/*
1.context
  - dirname
2.config
  - pattern
  - options
*/ 
exports.globSnippets = function ({ dirname = ''} = {}, config = {}) {
  const { pattern, ...options } = config
  const files = globSync(pattern, options)
  const filenames = files.map(file => path.basename(file)).filter(file => file !== 'index.js')
  const filenameRegExp = /^\d+\.(.+)\.(js|vue)$/

  const snippets = {}
  filenames.forEach(filename => {
    const matches = filename.match(filenameRegExp)
    const prefix = matches[1]
    const prop = upperCaseFirst(transformSymbol(prefix))
    const suggestion = getSuggestion({
      prefix,
      body: transformJsToArray(path.resolve(dirname || __dirname, `./${filename}`)),
      description: `Code Snippets For ${prop}.`
    })
    snippets[prop] = suggestion
    return suggestion
  })
  return snippets
}
