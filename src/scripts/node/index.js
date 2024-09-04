const { transformString, getSuggestion } = require('../../utils')
const { builtinModules } = require('module')
console.log(builtinModules)

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
  snippets[`Node.ESM.${originModuleName}`] = getSuggestion({
    prefix: `node-esm-${originModuleName}`,
    body: [
      `import \${1:${transformModuleName}} from 'node:${originModuleName}'`
    ],
    description: `ESM Code Snippets For Node.${originModuleName}`
  })
}

module.exports = snippets
