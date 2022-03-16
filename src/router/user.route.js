const Router = require('@koa/router')
const { register, login } = require('../controller/user.controller')
const { userValidator, userVertifier } = require('../middleware/user.middleware')

const router = new Router({
	prefix: '/user'
})

router.post('/register', userValidator, userVertifier, register)

router.post('/login', login)

module.exports = router