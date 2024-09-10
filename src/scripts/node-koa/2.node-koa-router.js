const Router = require('koa-router')
const router = new Router()

router.get('/list', async (ctx) => {
  // ctx.body = 'Home List'
  await ctx.render('home', { msg: 'Home List' })
})

// 自定义前缀
router.use('/home', router.routes())

// 必须调用注册router
app.use(router.routes())
