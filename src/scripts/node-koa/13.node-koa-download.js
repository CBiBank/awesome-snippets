router.post('/download', async (ctx) => {
  const { filename } = ctx.request.body
  const filePath = path.join(__dirname, 'uploads', filename)

  ctx.set('Content-Disposition', `attachment; filename=${filename}`)
  ctx.set('Content-Type', 'application/octet-stream')
  ctx.body = fs.createReadStream(filePath)
})
