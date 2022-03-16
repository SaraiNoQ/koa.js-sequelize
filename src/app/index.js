const koa = require('koa')
const userRouter = require('../router/user.route')
const body = require('koa-body')
const errHandler = require('./errHandler')

const app = new koa()

// middleware的顺序很重要，这个koa-body必须在router之前被注册到app对象上
app
	.use(body())
	.use(userRouter.routes())

// uniform error handle
app.on('error', errHandler)
module.exports = app