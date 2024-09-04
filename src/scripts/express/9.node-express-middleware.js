app.use('/', (req, res, next) => {
  console.log(`Middleware before`)
  next()
  console.log(`Middleware after`)
})
