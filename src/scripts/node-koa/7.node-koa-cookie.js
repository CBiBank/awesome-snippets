app.keys = ['some secret hurr']

// 中间件
app.use(async (ctx, next) => {
  ctx.cookies.set('name', 'koa_signed', { signed: true })
  await next()
})
