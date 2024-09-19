const http = require('http')
const multiparty = require('multiparty')

const server = http.createServer((req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk
  })
  req.on('end', () => {
    const contentType = req.headers['content-type']
    if (contentType.startsWith('multipart/form-data')) {
      const form = new multiparty.Form()
      form.parse(req, (err, fields, files) => {
        if (err) {
          res.statusCode = 400
          res.end('Error parsing multipart data')
          return
        }
        res.end('Received multipart data')
      })
    } else {
      res.statusCode = 400
      res.end('Unsupported Content-Type')
    }
  })
})
