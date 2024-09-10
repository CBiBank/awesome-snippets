// 由于是洋葱模型 因此使用try...catch在中间件链开始时捕获next()执行错误
app.use(async (ctx, next) => {
  try {
    await next()
    // koa默认会将statusCode设置为了404 而不是异常错误
    if (ctx.status === 404) {
      ctx.status = 404
      ctx.body = 'Resource Not Found'
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      message: err.message || 'Internal Server Error'
    }
  }
})
