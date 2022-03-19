const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Nextgiveaway } = require('../models')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.create = async (req, res, next) => {
	const newGame = await Nextgiveaway.create({
		date: req.body.date,
		image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const nextgiveaways = await Nextgiveaway.findAll().then((Nextgiveaway) => {
		res.status(200).json(Nextgiveaway)
	})
}

exports.delete = async (req, res, next) => {
	const id = req.params.id
	const findnextgiveaway = await Nextgiveaway.findOne({ where: { id: id } })
		.then(async (Nextgiveaway) => {
			const filename = Nextgiveaway.image.split('/images/')[1]
			fs.unlink(`images/${filename}`, () => {
				Nextgiveaway.destroy({ where: { id: id } })
					.then(() => res.status(201).json({ message: 'Jeu supprimé !' }))
					.catch((error) => res.status(400).json({ error }))
			})
		})
		.catch((error) => res.status(500).json({ error }))
}
