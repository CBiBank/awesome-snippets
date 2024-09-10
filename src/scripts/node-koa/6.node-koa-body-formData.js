const multer = require('@koa/multer')
const upload = multer()

app.post('/form-data', upload.none(), async (ctx, next) => {
  ctx.body = ctx.request.body
})
