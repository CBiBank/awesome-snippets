const path = require('node:path')
const fs = require('node:fs')
const { builtinModules } = require('module')
console.log(builtinModules)
const filePath = path.resolve(__dirname, '../../snippets/node.code-snippets')

const snippets = {}
for (let i = 0; i < builtinModules.length; i++) {
  const module = builtinModules[i]
  snippets[`Node.${module}`] = getSuggestion({
    prefix: `node-${module}`,
    body: [
      `const \${1:${module}} = require('node:${module}')`
    ],
    description: `Code Snippets For Node.${module}`
  })
}

try {
  fs.writeFileSync(filePath, JSON.stringify(snippets, null, 2))
  console.log(`Write File Successfully`)
} catch (e) {
  console.log(e)
}


function getSuggestion ({
  prefix = 'node',
  body = [],
  description = 'Code Snippets For Node.'
} = {}) {
  return {
    prefix,
    body,
    description
  }
}
