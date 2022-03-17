const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')
const { invalidToken, TokenExpiredError, noPermission } = require('../constants/err.type')

// 用户是否登录
const auth = async (ctx, next) => {
	// 从请求头中获取token信息，默认设置为空（无效的token，防止报服务器错误）
	const { authorization = '' }= ctx.request.header
	// 'Bear '
	const token = authorization.replace('Bearer ', '')
	// console.log('token', token)

	try {
		// 把user解密成payload
		const user = jwt.verify(token, JWT_SECRET)
		ctx.state.user = user
	} catch (error) {
		switch (error.name) {
		case 'TokenExpiredError':
			console.error('token已过期')
			return ctx.app.emit('error', TokenExpiredError, ctx)
		case 'JsonWebTokenError':
			console.error('token错误')
			return ctx.app.emit('error', invalidToken, ctx)
		}
	}

	await next()
}

// 用户是否具有管理员权限
const hadAdminPermission = async (ctx, next) => {
	const {is_admin} = ctx.state.user
	if (is_admin === 0) {
		console.error('no permission!')
		return ctx.app.emit('error', noPermission, ctx)
	}

	await next()
}

module.exports = {
	auth,
	hadAdminPermission
}