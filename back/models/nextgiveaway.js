'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Nextgiveaway extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Nextgiveaway.init(
		{
			date: DataTypes.STRING,
			image: DataTypes.STRING,
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
		},
		{
			sequelize,
			modelName: 'Nextgiveaway',
			createdAt: false,
			updatedAt: false,
			timestamps: false,
		}
	)
	return Nextgiveaway
}
