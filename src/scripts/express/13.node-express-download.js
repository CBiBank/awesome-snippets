router.post('/download', (req, res) => {
  const { filename } = req.body
  const filePath = path.join(__dirname, '../uploads', filename)
  // download方法会在响应头中添加Content-Disposition头
  res.download(filePath, filename, (err) => {
    if (err) {
      console.error('File failed to download:', err)
      res.status(500).send('Error downloading file')
    }
  })
  // res.sendFile(filePath, (err) => {
  //   if (err) {
  //     console.error('File failed to send:', err)
  //     res.status(500).send('Error sending file')
  //   }
  // })
})
