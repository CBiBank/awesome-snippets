const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/download')) {
    // 从请求中提取文件名（假设文件名是从 URL 参数中获取的）
    const fileName = req.url.split('/download/')[1]
    const filePath = path.join(__dirname, 'files', fileName)

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('File not found')
        return
      }
      res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`
      })

      const fileStream = fs.createReadStream(filePath)
      fileStream.pipe(res)

      fileStream.on('error', (streamErr) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Server error')
        console.error('File stream error:', streamErr)
      })
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})
