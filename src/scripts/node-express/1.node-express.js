const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Got a GET request')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`)
})
