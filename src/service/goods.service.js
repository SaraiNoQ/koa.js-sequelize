const Goods = require('../model/goods.model')

class GoodsService {
	async createGoods ({goods_name, goods_price, goods_num, goods_img}) {
		// console.log('body', goods_name, goods_price, goods_num, goods_img)

		const res = await Goods.create({
			goods_name,
			goods_price,
			goods_num,
			goods_img
		})

		return res.dataValues
	}

	async updateGoods ({goods_name, goods_price, goods_num, goods_img}) {
		// console.log('requese', goods_name, goods_price, goods_num, goods_img)
		const change = {}
		// goods_name unique
		const whereOpt = {goods_name}

		goods_price && Object.assign(change, {goods_price})
		goods_num && Object.assign(change, {goods_num})
		goods_img && Object.assign(change, {goods_img})

		const res = await Goods.update(change, {where: whereOpt})
		// res是一个[number], number = 影响的行数
		return res
	}
}

module.exports = new GoodsService()