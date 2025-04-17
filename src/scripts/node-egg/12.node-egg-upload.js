const egg = require('egg')
const router = egg.Router()
const fs = require('node:fs')
const path = require('node:path')

const multer = require('multer')
const uploadDirname = 'uploads'
const uploadDir = path.resolve(__dirname, uploadDirname)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), (req, res, next) => {
  try {
    console.log(req.file)
    res.send('File uploaded successfully!')
  } catch (error) {
    next(error)
  }
})

module.exports = router
