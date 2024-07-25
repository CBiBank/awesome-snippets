const path = require('node:path')
const fs = require('node:fs')
const { builtinModules } = require('module')
console.log(builtinModules)
const filePath = path.resolve(__dirname, '../../snippets/node.code-snippets')

const snippets = {}
for (let i = 0; i < builtinModules.length; i++) {
  const originModuleName = builtinModules[i]
  let transformModuleName = originModuleName
  // 跳过 _ 开头的模块
  if (originModuleName.indexOf('_') === 0) {
    continue
  }
  // 中间带 _ 的模块
  if (originModuleName.indexOf('_') > -1) {
    transformModuleName = transformString(originModuleName, {
      identify: '_'
    })
  }
  // 中间带 / 的模块
  if (originModuleName.indexOf('/') > -1) {
    transformModuleName = transformString(originModuleName, {
      identify: '/'
    })
  }
  snippets[`Node.${originModuleName}`] = getSuggestion({
    prefix: `node-${originModuleName}`,
    body: [
      `const \${1:${transformModuleName}} = require('node:${originModuleName}')`
    ],
    description: `Code Snippets For Node.${originModuleName}`
  })
}

try {
  fs.writeFileSync(filePath, JSON.stringify(snippets, null, 2))
  console.log(`Write File Successfully`)
} catch (e) {
  console.log(e)
}

function transformString (str, { identify = '_' } = {}) {
  const list = str.split(identify)
  const upperCaseList = list.map((item, index) => {
    if (index === 0) {
      return item
    }
    return item.charAt(0).toUpperCase() + item.slice(1)
  })
  return upperCaseList.join('')
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
