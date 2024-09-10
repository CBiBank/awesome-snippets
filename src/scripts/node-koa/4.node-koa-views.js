const views = require('koa-views')

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
