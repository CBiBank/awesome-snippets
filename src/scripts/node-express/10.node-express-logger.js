const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })
const errorLogStream = fs.createWriteStream(path.join(__dirname, 'logs/error.log'), { flags: 'a' })

// combined > common > short > dev >= short
app.use(morgan('combined', {
  stream: accessLogStream, // 指定日志的输出流。默认是 process.stdout（控制台输出）
  skip: (req, res) => res.statusCode >= 400, // 跳过特定条件下的日志记录
  immediate: false // 立即记录日志，通常日志是在响应发送后记录
}))
app.use(morgan('combined', {
  stream: errorLogStream,
  skip: (req, res) => res.statusCode < 400,
  immediate: false
}))
