const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200 // 设置响应状态码
  res.setHeader('Content-Type', 'text/plain') // 设置响应头
  res.end('Hello, World!\n') // 响应内容
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
