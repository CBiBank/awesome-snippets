const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 设置 Cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true })
  res.send('Cookie has been set')
})

// 获取 Cookie
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username
  res.send(`Username from cookie: ${username}`)
})

// 清除 Cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username')
  res.send('Cookie has been cleared')
})
