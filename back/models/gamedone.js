'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Gamedone extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Gamedone.init(
		{
			name: DataTypes.STRING,
			resume: DataTypes.STRING,
			avis: DataTypes.STRING,
			note: DataTypes.NUMBER,
			image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Gamedone',
			tableName: 'gamesdone',
			createdAt: false,
			updatedAt: false,
			timestamps: false,
		}
	)

	return Gamedone
}
