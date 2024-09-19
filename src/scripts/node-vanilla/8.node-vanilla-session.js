const http = require('http')
const crypto = require('crypto')

// 存储会话的对象（实际应用中应使用数据库或缓存，如 Redis）
const sessions = {}

const parseCookies = (cookieHeader) => {
  const cookies = {}
  if (!cookieHeader) return cookies
  cookieHeader.split(';').forEach(cookie => {
    const [name, ...rest] = cookie.split('=')
    cookies[name.trim()] = decodeURIComponent(rest.join('='))
  })
  return cookies
}

const generateSessionId = () => {
  return crypto.randomBytes(16).toString('hex')
}

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie)
  let sessionId = cookies.sessionId

  if (!sessionId || !sessions[sessionId]) {
    sessionId = generateSessionId()
    sessions[sessionId] = { username: 'Guest' }
    res.setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly; Path=/`)
  }

  const session = sessions[sessionId]
  if (req.url === '/login') {
    session.username = 'JohnDoe'
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('You are now logged in')
  } else if (req.url === '/logout') {
    delete sessions[sessionId] 
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('You are now logged out')
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Hello, ${session.username}`)
  }
})
