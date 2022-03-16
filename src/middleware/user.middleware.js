const bcrypt = require('bcryptjs')

const { getUser, updateById } = require('../service/user.service')
const { userAlreadyExited, userFormatError, userRegisterError, userNotExited, userLoginError, invalidPassword } = require('../constants/err.type') 

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

const cryptPassword = async (ctx, next) => {
	const {password} = ctx.request.body
	//生成密钥
	const salt = bcrypt.genSaltSync(10)
	// 生成密文
	const hash = bcrypt.hashSync(password, salt)
	ctx.request.body.password = hash

	await next()
}

const vertifyLogin = async (ctx, next) => {
	const {user_name, password} = ctx.request.body
	// 1. user exited?
	const res = await getUser({user_name})

	try {
		if (!res) {
			console.error(`user:${user_name} is not exist!`)
			ctx.app.emit('error', userNotExited, ctx)
			return
		}
	} catch (error) {
		console.error('retrieve user info failed!')
		ctx.app.emit('error', userLoginError, ctx)
		return
	}
	// 2. password is right?
	if (!bcrypt.compareSync(password, res.password)) {
		ctx.app.emit('error', invalidPassword, ctx)
		return
	}

	await next()
}

const changePassword = async (ctx, next) => {
	// 获取用户新的信息
	const id = ctx.state.user.id
	const password = ctx.request.body.password
	// 操作数据库
	await updateById({id, password})

	await next()
}

module.exports = {
	userValidator,
	userVertifier,
	cryptPassword,
	vertifyLogin,
	changePassword
}