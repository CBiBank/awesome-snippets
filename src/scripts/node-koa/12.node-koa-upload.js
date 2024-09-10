const Router = require('koa-router')
const router = new Router()
const fs = require('node:fs')
const path = require('node:path')

const multer = require('@koa/multer')
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

router.post('/upload', upload.single('file'), async (ctx, next) => {
  console.log('file', ctx.request.file, ctx.file)
  try {
    ctx.body = 'File uploaded successfully!'
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
