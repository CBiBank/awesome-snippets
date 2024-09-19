const server = http.createServer((req, res) => {
  const url = req.url
  res.setHeader('Content-Type', 'text/plain')
  
  if (url === '/') {
    res.statusCode = 200
    res.end('This is the home page.\n')
  } else if (url === '/about') {
    res.statusCode = 200
    res.end('This is the about page.\n')
  } else {
    res.statusCode = 404
    res.end('Page not found.\n')
  }
})
