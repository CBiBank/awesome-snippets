const parseCookies = (cookieHeader) => {
  const cookies = {}
  if (!cookieHeader) return cookies
  cookieHeader.split(';').forEach(cookie => {
    const [name, ...rest] = cookie.split('=')
    cookies[name.trim()] = decodeURIComponent(rest.join('='))
  })
  return cookies
}

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie)
  if (!cookies.username) {
    res.setHeader('Set-Cookie', 'username=JohnDoe; HttpOnly; Path=/; Max-Age=3600');
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Cookie has been set for the first time')
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Welcome back, ${cookies.username}`)
  }
})
