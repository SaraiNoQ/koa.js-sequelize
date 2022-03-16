const Router = require('@koa/router')
const { register, login } = require('../controller/user.controller')
const { userValidator, userVertifier, cryptPassword, vertifyLogin } = require('../middleware/user.middleware')

const router = new Router({
	prefix: '/user'
})

// 先验证，再加密，最后注册
router.post('/register', userValidator, userVertifier, cryptPassword, register)

router.post('/login', userValidator, vertifyLogin, login)

module.exports = router