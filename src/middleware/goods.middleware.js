const { fileTypeError } = require('../constants/err.type')

const fileType = async (ctx, next) => {
	const { type } = ctx.request.files
	const trueType = ['image/jpeg', 'image/png']
	if (!trueType.includes(type)) {
		return ctx.app.emit('error', fileTypeError, ctx)
	}
	await next()
}

module.exports = {
	fileType
}