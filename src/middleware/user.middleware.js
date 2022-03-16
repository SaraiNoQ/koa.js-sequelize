const { getUser } = require('../service/user.service')
const { userAlreadyExited, userFormatError } = require('../constants/err.type') 

const userValidator = async (ctx, next) => {
	// get request data
	const {user_name, password} = ctx.request.body
		
	// 判断数据合法
	if (!user_name || !password) {
		// emit error info, use app.on method to accept it.
		ctx.app.emit('error', userFormatError, ctx)
		return
	}

	// 如果数据合法，正常进入下一个middleware
	await next()
}

const userVertifier = async (ctx, next) => {
	const {user_name} = ctx.request.body
	// 数据合理
	if (await getUser({user_name})) {
		console.log('resp2')
		ctx.app.emit('error', userAlreadyExited, ctx)
		return 
	}

	await next()
}

module.exports = {
	userValidator,
	userVertifier
}