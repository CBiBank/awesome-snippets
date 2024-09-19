const http = require('http')
const fs = require('fs')
const path = require('path')

const parseMultipartFormData = (req, boundary) => {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => {
      data += chunk.toString()
    })
    req.on('end', () => {
      const parts = data.split('--' + boundary).filter(part => part.trim() !== '--' && part.trim() !== '')
      const fileData = {}
      parts.forEach(part => {
        const [headers, body] = part.split('\r\n\r\n')
        if (headers.includes('filename')) {
          const nameMatch = headers.match(/name="(.+?)"/)
          const filenameMatch = headers.match(/filename="(.+?)"/)
          if (nameMatch && filenameMatch) {
            const name = nameMatch[1]
            const filename = filenameMatch[1]
            const fileContent = body.split('\r\n')[0]
            fileData[name] = { filename, fileContent }
          }
        }
      })
      resolve(fileData)
    })
    req.on('error', err => {
      reject(err)
    })
  })
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')))
  } else if (req.method === 'POST' && req.url === '/upload') {
    const contentType = req.headers['content-type']
    const boundary = contentType.split('=')[1]
    try {
      const fileData = await parseMultipartFormData(req, boundary)
      for (let key in fileData) {
        const { filename, fileContent } = fileData[key]
        const savePath = path.join(__dirname, 'uploads', filename)
        fs.writeFileSync(savePath, fileContent, 'binary')
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('File uploaded successfully')
    } catch (error) {
      console.error('File upload error:', error)
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('File upload failed')
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})
