const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Goods = seq.define('zd_goods', {
	goods_name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		comment: 'the name of goods'
	},
	goods_price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false,
		comment: 'the price of goods'
	},
	goods_num: {
		type: DataTypes.INTEGER,
		allowNull: false,
		comment: 'the nums of goods'
	},
	goods_img: {
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'the photo of goods'
	}
})

// Goods.sync({
// 	force: true
// })

module.exports = Goods