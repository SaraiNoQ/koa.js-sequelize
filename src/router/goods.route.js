const Router = require('@koa/router')

const router = new Router({ prefix: '/goods'})

const { upload } = require('../controller/goods.controller')
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')

router.post('/upload', auth, hadAdminPermission, upload)

module.exports = router