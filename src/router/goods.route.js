const Router = require('@koa/router')

const router = new Router({ prefix: '/goods'})

const { upload, create, update, remove } = require('../controller/goods.controller')
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validator,  } = require('../middleware/goods.middleware')

// 文件上传
router.post('/upload', auth, hadAdminPermission, upload)

// 商品信息发布
router.post('/', auth, hadAdminPermission, validator, create)

// 修改商品信息
router.put('/', auth, hadAdminPermission, validator, update)

// 硬删除商品信息
router.delete('/:id', auth, hadAdminPermission, remove)

module.exports = router