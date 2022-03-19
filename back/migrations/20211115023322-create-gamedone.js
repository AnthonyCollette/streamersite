'use strict'
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Gamesdone', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			resume: {
				type: Sequelize.STRING,
			},
			avis: {
				type: Sequelize.STRING,
			},
			note: {
				type: Sequelize.NUMBER,
			},
			image: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Gamesdone')
	},
}
