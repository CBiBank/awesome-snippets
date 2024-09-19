const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk
  })
  req.on('end', () => {
    const contentType = req.headers['content-type']

    if (contentType.startsWith('application/json')) {
      try {
        const parsedBody = JSON.parse(body)
        res.end('Received JSON data')
      } catch (e) {
        res.statusCode = 400
        res.end('Invalid JSON')
      }
    } else if (contentType.startsWith('application/x-www-form-urlencoded')) {
      const parsedBody = querystring.parse(body)
      res.end('Received URL-encoded data')
    } else {
      res.statusCode = 400
      res.end('Unsupported Content-Type')
    }
  })
})
