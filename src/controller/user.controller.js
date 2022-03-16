/* eslint-disable @typescript-eslint/no-unused-vars */
// 获取请求，调用service操作model层方法
const {createUser, getUserInfo} = require('../service/user.service')
const { userRegisterError } = require('../constants/err.type')

class UserController {
	async register (ctx, next) {
		// 1. get request
		const {user_name, password} = ctx.request.body
		try {
			// 2. crud database
			const res = await createUser(user_name, password)
			// 3. return response
			ctx.body = {
				'status': 0,
				'message': 'Register Success!',
				'result': {
					'id': res.id,
					'user_name': res.user_name
				}
			}
		} catch (error) {
			console.error('注册用户信息错误', error)
			ctx.app.emit('error', userRegisterError, ctx)
		}
		
	}
	async login (ctx, next) {
		console.log('test')
		ctx.body = `User:${ctx.request.body.user_name} Login Success!`
	}
}

module.exports = new UserController()