const bodyParser = require('koa-bodyparser')

app.use(bodyParser({
  // ctx.request.body
  enableTypes: ['json', 'form', 'text']
}))
