const Koa = require('koa')
const app = new Koa()
const port = 3000

app.use(async (ctx, next) => {
  if (ctx.path === '/' && ctx.method === 'GET') {
    ctx.body = 'Hello World'
  }
  await next()
})

app.listen(port, () => {
  console.log(`Example app running on http://127.0.0.1:${port}`)
})