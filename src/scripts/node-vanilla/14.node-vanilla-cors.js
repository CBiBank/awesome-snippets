const http = require('http')

const server = http.createServer((req, res) => {
  // 设置 CORS 响应头
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // 处理预检请求（OPTIONS 请求）
  if (req.method === 'OPTIONS') {
    res.writeHead(204) // No Content
    res.end()
    return
  }

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, world')
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' }) // Method Not Allowed
    res.end('Method Not Allowed')
  }
})
