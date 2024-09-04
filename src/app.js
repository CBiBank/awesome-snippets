const path = require('node:path')
const fs = require('node:fs')
const fsPromise = fs.promises
const { globSnippets } = require('./utils/glob')

const scriptsPath = path.resolve(__dirname, './scripts')
const dirs = fs.readdirSync(scriptsPath)

console.log(dirs)

const generateList = dirs.map(dir => {
  const dirname = path.resolve(scriptsPath, dir)
  const from = `src/scripts/${dir}`
  const to = path.resolve(__dirname, `../snippets/${dir}.code-snippets`)
  if (dir === 'node') {
    const snippets = require(`${dirname}/index.js`)
    return fsPromise.writeFile(to, JSON.stringify(snippets, null, 2))
  }
  const snippets = globSnippets({
    dirname
  }, {
    pattern: `${from}/**/*`,
    nodir: true
  })
  return fsPromise.writeFile(to, JSON.stringify(snippets, null, 2))
})

Promise.all(generateList).then(_ => {
  console.log(`Write File Successfully`)
}).catch(e => {
  console.log(e)
}) 
