const fs = require('fs')

exports.transformString = function (str, { identify = '_' } = {}) {
  const list = str.split(identify)
  const upperCaseList = list.map((item, index) => {
    if (index === 0) {
      return item
    }
    return item.charAt(0).toUpperCase() + item.slice(1)
  })
  return upperCaseList.join('')
}

exports.getSuggestion = function ({
  prop = '',
  prefix = 'node',
  body = [],
  description = 'Code Snippets For Node.'
} = {}) {
  if (prop) {
    return {
      [prop]: {
        prefix,
        body,
        description
      }
    }
  } else {
    return {
      prefix,
      body,
      description
    }
  }
}

/*
Transform:
app.get('/', (req, res) => {
  res.send('Got a GET request')
})

To:
[
  "app.get('/', (req, res) => {",
  "\tres.send('Got a GET request')", 
  "})"
]
*/
exports.transformJsToArray = function (filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const lines = fileContent.split(/\r?\n/)
  const formattedLines = lines.map(line => line.replace(/^\s+/, match => match.replace(/^\s+/g, '\t')).replace(/\s+$/, ''))
  return formattedLines
}
