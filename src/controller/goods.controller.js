const path = require('path')

const { fileUploadError, fileTypeError } = require('../constants/err.type')


class GoodsController {
	async upload (ctx, next) {
		// console.log(ctx.request.files.file)
		const {file} = ctx.request.files
		console.log(file)
		const trueType = ['image/jpeg', 'image/png']
		if (file.size !== 0) {
			if (!trueType.includes(file.type)) {
				return ctx.app.emit('error', fileTypeError, ctx)
			}
			ctx.body = {
				code: 0,
				message: 'upload success!',
				result: {
					// 通过路径获取到文件的名字
					goods_img: path.basename(file.path)
				}
			}
		} else {
			return ctx.app.emit('error', fileUploadError, ctx)
		}
	}
}

module.exports = new GoodsController()