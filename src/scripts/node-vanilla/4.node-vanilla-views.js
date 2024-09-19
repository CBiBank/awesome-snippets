const renderTemplate = (filePath, data, callback) => {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      callback(err, null)
    } else {
      const rendered = ejs.render(content, data)
      callback(null, rendered)
    }
  })
}

const server = http.createServer((req, res) => {
  const templatePath = path.join(__dirname, 'views', 'index.ejs')
  const data = { title: 'EJS Example', message: 'Hello, EJS!' }

  renderTemplate(templatePath, data, (err, html) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Error rendering template')
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(html)
    }
  })
})
