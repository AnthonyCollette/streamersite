const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Gameinprogress } = require('../models')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.create = async (req, res, next) => {
	const newGame = await Gameinprogress.create({
		name: req.body.name,
		image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const gamesinprogress = await Gameinprogress.findAll().then(
		(Gameinprogress) => {
			res.status(200).json(Gameinprogress)
		}
	)
}

exports.delete = async (req, res, next) => {
	const id = req.params.id
	const findGameinprogress = await Gameinprogress.findOne({ where: { id: id } })
		.then(async (gameinprogress) => {
			const filename = gameinprogress.image.split('/images/')[1]
			fs.unlink(`images/${filename}`, () => {
				Gameinprogress.destroy({ where: { id: id } })
					.then(() => res.status(201).json({ message: 'Jeu supprimé !' }))
					.catch((error) => res.status(400).json({ error }))
			})
		})
		.catch((error) => res.status(500).json({ error }))
}
