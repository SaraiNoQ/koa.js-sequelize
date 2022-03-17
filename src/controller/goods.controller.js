const path = require('path')

const { fileUploadError, fileTypeError, createGoodsError, updateGoodsError, removeGoodsError } = require('../constants/err.type')
const { createGoods, updateGoods, removeGoods } = require('../service/goods.service')


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

	async create (ctx, next) {
		try {
			const res = await createGoods(ctx.request.body)
			ctx.body = {
				code: 0,
				message: 'create goods success!',
				result: res
			}
		} catch (error) {
			console.error('create goods info error!')
			return ctx.app.emit('error', createGoodsError, ctx)
		}
	}

	async update (ctx, next) {
		try {
			const res = await updateGoods(ctx.request.body)
			// 根据body.result可以知道，无需写成错误
			// if (!res[0]) {
			// 	return ctx.app.emit('error', updateGoodsError, ctx)
			// }
			ctx.body = {
				code: 0,
				message: 'update goods info success!',
				result: res
			}
		} catch (error) {
			console.error('update goods info error!')
			return ctx.app.emit('error', updateGoodsError, ctx)
		}
	}

	async remove (ctx, next) {
		try {
			const res = await removeGoods(ctx.params.id)
			ctx.body = {
				code: 0,
				message: 'remove goods info success!',
				result: res
			}
		} catch (error) {
			console.error('remove goods info error!')
			return ctx.app.emit('error', removeGoodsError, ctx)
		}
	}
}

module.exports = new GoodsController()