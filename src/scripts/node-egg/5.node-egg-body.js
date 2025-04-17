// application/x-www-form-urlencoded
app.use(egg.urlencoded({ extended: true }))
// application/json
app.use(egg.json())
// text-plain
app.use(egg.text())
// application/octet-stream
app.use(egg.raw())
