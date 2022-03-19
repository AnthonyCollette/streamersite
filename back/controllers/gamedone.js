const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Gamedone } = require('../models')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.create = async (req, res, next) => {
	const newGame = await Gamedone.create({
		name: req.body.name,
		resume: req.body.resume,
		avis: req.body.avis,
		note: req.body.note,
		image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const gamesdone = await Gamedone.findAll().then((Gamedone) => {
		res.status(200).json(Gamedone)
	})
}

exports.delete = async (req, res, next) => {
	const id = req.params.id
	console.log(req)
	const findGamedone = await Gamedone.findOne({ where: { id: id } })
		.then(async (gamedone) => {
			const filename = gamedone.image.split('/images/')[1]
			fs.unlink(`images/${filename}`, () => {
				Gamedone.destroy({ where: { id: id } })
					.then(() => res.status(201).json({ message: 'Jeu supprimé !' }))
					.catch((error) => res.status(400).json({ error }))
			})
		})
		.catch((error) => res.status(500).json({ error }))
}
