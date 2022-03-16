const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')
const { invalidToken, TokenExpiredError } = require('../constants/err.type')

const auth = async (ctx, next) => {
	const { authorization }= ctx.request.header
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

module.exports = {
	auth
}