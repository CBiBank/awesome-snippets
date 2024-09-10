app.use(async (ctx, next) => {
  console.log(`Middleware before`)
  await next()
  console.log(`Middleware after`)
})
