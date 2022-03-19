const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Winner } = require('../models')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.create = async (req, res, next) => {
	console.log(req.body)
	const newWinner = await Winner.create({
		name: req.body.name,
		image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const Winners = await Winner.findAll().then((Winner) => {
		res.status(200).json(Winner)
	})
}

// exports.delete = async (req, res, next) => {
// 	const id = req.params.id
// 	const findWinner = await Winner.findOne({ where: { id: id } })
// 		.then(async (Winner) => {
// 			const filename = Winner.image.split('/images/')[1]
// 			fs.unlink(`images/${filename}`, () => {
// 				Winner.destroy({ where: { id: id } })
// 					.then(() => res.status(201).json({ message: 'Gagnant supprimé !' }))
// 					.catch((error) => res.status(400).json({ error }))
// 			})
// 		})
// 		.catch((error) => res.status(500).json({ error }))
// }
