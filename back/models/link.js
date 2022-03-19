'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Link extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Link.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			url: DataTypes.STRING,
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
		},
		{
			sequelize,
			modelName: 'Link',
			createdAt: false,
			updatedAt: false,
			timestamps: false,
		}
	)
	return Link
}