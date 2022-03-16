const { getUser } = require('../service/user.service')
const { userAlreadyExited, userFormatError, userRegisterError } = require('../constants/err.type') 

const userValidator = async (ctx, next) => {
	// get request data
	const {user_name, password} = ctx.request.body
		
	// 判断数据合法
	if (!user_name || !password) {
		// emit error info, use app.on method to accept it.
		console.error('register info is illegal!')
		ctx.app.emit('error', userFormatError, ctx)
		return
	}

	// 如果数据合法，正常进入下一个middleware
	await next()
}

const userVertifier = async (ctx, next) => {
	const {user_name} = ctx.request.body
	// 数据合理
	const res = await getUser({user_name})
	try {
		if (res) {
			console.error('register info is already exited!')
			ctx.app.emit('error', userAlreadyExited, ctx)
			return
		}
	} catch (error) {
		console.error('retrieve user info failed!')
		ctx.app.emit('error', userRegisterError, ctx)
		return
	}

	// 如果遇到错误就要return，防止进入下一个中间件
	await next()
}

module.exports = {
	userValidator,
	userVertifier
}