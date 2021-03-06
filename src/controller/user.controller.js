/* eslint-disable @typescript-eslint/no-unused-vars */
// 获取请求，调用service操作model层方法
const {createUser, getUserInfo, getUser} = require('../service/user.service')
const { userRegisterError } = require('../constants/err.type')
const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
const { JWT_SECRET } = require('../config/config.default')

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
		const {user_name} = ctx.request.body

		// 获取用户信息（在token的payload中，记录id，user_name，is_admin）
		try {
			// 获取到除了password之外的属性
			const {password, ...res} = await getUser({user_name})

			ctx.body = {
				code: 0,
				message: 'login success!',
				result: {
					token: jwt.sign(res, JWT_SECRET, { expiresIn: '1h' })
				}
			}
		} catch (error) {
			console.error('login error!', error)
		}
	}
}

module.exports = new UserController()