app.use('/', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
app.use((err, req, res, next) => {
  const { name, status, log = false } = err
  if (log) {
    const errorDetails = `
      Error Message: ${err.message}
      Status Code: ${err.status || 500}
      Stack Trace: ${err.stack}
      Request Method: ${req.method}
      Request URL: ${req.originalUrl}
      Request Headers: ${JSON.stringify(req.headers)}
    `
    errorLogStream && errorLogStream.write(errorDetails.replace(/ /g, '') + '\n', 'utf-8')
  }
  if (name === 'ValidationError') {
    return res.status(400).send({ error: name })
  }
  if (status === 404) {
    return res.status(404).send('Not Found')
  }
  res.status(500).send('Internal Server Error')
})
