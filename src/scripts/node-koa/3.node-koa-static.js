const static = require('koa-static')

// 相比express的静态托管 不支持自定义路径前缀
app.use(static(__dirname + '/public'))
