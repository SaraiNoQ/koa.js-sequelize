/* eslint-disable @typescript-eslint/no-unused-vars */
// 获取请求，调用model层方法
const {createUser, getUserInfo, getUser} = require('../service/user.service')

class UserController {
	async register (ctx, next) {
		// 1. get request
		const {user_name, password} = ctx.request.body
		
		// 数据合法
		// if (!user_name || !password) {
		// 	ctx.status = 400
		// 	ctx.body = {
		// 		code: '10001',
		// 		message: 'nickname or password is null!',
		// 		result: ''
		// 	}
		// 	return
		// }
		// 数据合理
		// if (await getUser({user_name})) {
		// 	console.log('resp2')
		// 	ctx.status = 409,
		// 	ctx.body = {
		// 		code: '10002',
		// 		message: 'nickname duplicate',
		// 		result: ''
		// 	}
		// 	return 
		// }
		
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
	}
	async login (ctx, next) {
		ctx.body = 'User Login Success!'
	}
}

module.exports = new UserController()