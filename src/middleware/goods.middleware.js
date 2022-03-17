const { fileTypeError, goodsFormatError } = require('../constants/err.type')

const fileType = async (ctx, next) => {
	const { type } = ctx.request.files
	const trueType = ['image/jpeg', 'image/png']
	if (!trueType.includes(type)) {
		return ctx.app.emit('error', fileTypeError, ctx)
	}
	await next()
}

// 判断商品信息格式是否正确
const validator = async (ctx, next) => {
	try {
		ctx.verifyParams({
			goods_name: {type: 'string', required: true},
			goods_price: {type: 'number', required: true},
			goods_num: {type: 'number', required: true},
			goods_img: {type: 'string', required: true},
		})
	} catch (error) {
		console.error('upload info error!')
		goodsFormatError.result = error
		return ctx.app.emit('error', goodsFormatError, ctx)
	}

	await next()
}

module.exports = {
	fileType,
	validator
}