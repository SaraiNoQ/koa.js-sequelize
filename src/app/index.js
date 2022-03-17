const path = require('path')

const koa = require('koa')
const body = require('koa-body')
const static = require('koa-static')

const userRouter = require('../router')
const errHandler = require('./errHandler')

const app = new koa()

// middleware的顺序很重要，这个koa-body必须在router之前被注册到app对象上
app
	.use(body({
		multipart: true,
		formidable: {
			// 不推荐使用相对路径，当前body的路径为process.cwd()
			uploadDir: path.join(__dirname, '../uploads'),
			keepExtensions: true
		}
	}))
	.use(static(path.join(__dirname, '../uploads')))
	.use(userRouter.routes())
	// 没有写的请求类型返回405错误
	.use(userRouter.allowedMethods())

// uniform error handle
app.on('error', errHandler)
module.exports = app