// 操作数据库model
const User = require('../model/user.model')

class UserService {
	// create in database
	async createUser(user_name, password) {
		// 对象解构
		const res = await User.create({
			user_name,
			password
		})
		
		return res.dataValues
	}

	// retrieve in database
	async getUserInfo({id, user_name, password, is_admin}) {
		const whereOpt = {}

		id && Object.assign(whereOpt, {id})
		user_name && Object.assign(whereOpt, {user_name})
		password && Object.assign(whereOpt, {password})
		is_admin && Object.assign(whereOpt, {is_admin})

		// 如果找到目标属性的目标值，返回一个promise对象的值（第一个元素）
		const res = await User.findOne({
			attributes: ['id', 'user_name', 'password', 'is_admin'],
			where: whereOpt
		})
		return res ? res.dataValues : null
	}

	// retrieve in database
	async getUser({user_name}) {
		const res = await User.findOne({
			attributes: ['user_name'],
			where: {user_name}
		})
		// console.log('res', res ? res.dataValues : null)
		return res ? res.dataValues : null
	}
}

module.exports = new UserService()