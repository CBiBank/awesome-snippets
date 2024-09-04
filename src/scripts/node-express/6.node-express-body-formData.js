const multer = require('multer')
const upload = multer()
app.post('/form-data', upload.none(), (req, res) => {
  res.send(res.body)
})
