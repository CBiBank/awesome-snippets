const logger = require('koa-logger')

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/access.log'), 
  { flags: 'a' }
)
const errorLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/error.log'), 
  { flags: 'a' }
)
// 创建正则表达式移除 ANSI 颜色转义码
const stripAnsi = (str) => str.replace(
  /[\u001b\u009b][[\]()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''
)
app.use(logger((str, args) => {
  const status = args[3]
  const cleanStr = stripAnsi(str)
  if (status >= 400) {
    errorLogStream.write(`${cleanStr}\n`)
  } else {
    accessLogStream.write(`${cleanStr}\n`)
  }
}))
