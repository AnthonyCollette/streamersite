const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { User } = require('../models')
const jwt = require('jsonwebtoken')

exports.login = async (req, res, next) => {
	const Neikko = await User.findOne({ where: { name: req.body.name } })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: 'Utilisateur non trouvé !' })
			} else if (user.password != req.body.password) {
				return res.status(401).json({ error: 'Mauvais identifiants' })
			} else {
				return res.status(200).json({
					token: jwt.sign({ user: user }, 'O+o@$o?oO%zurJA', {
						expiresIn: '24h',
					}),
				})
			}
		})
		.catch((error) => {
			res.status(500).json({ error })
		})
}
