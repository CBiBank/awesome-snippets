const session = require('egg-session')
app.use(session({
  name: 'egg-session-cookie', // 设置 cookie 名称
  secret: 'your-secret-key',  // 用于加密 session ID 的密钥
  resave: false,  // 是否强制保存 session 即使未修改
  saveUninitialized: true  // 是否保存未初始化的 session
}))

// 设置 Session
app.get('/set-session', (req, res) => {
  req.session.username = 'JohnDoe'
  res.send('Session has been set')
})

// 获取 Session
app.get('/get-session', (req, res) => {
  const username = req.session.username
  res.send(`Username from session: ${username}`)
})

// 销毁 Session
app.get('/destroy-session', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error destroying session')
    }
    res.send('Session has been destroyed')
  })
})
