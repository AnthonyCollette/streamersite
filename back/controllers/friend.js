const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Friend } = require('../models')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.create = async (req, res, next) => {
	const newFriend = await Friend.create({
		name: req.body.name,
		url: req.body.url,
		image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const friends = await Friend.findAll().then((Friend) => {
		res.status(200).json(Friend)
	})
}

exports.delete = async (req, res, next) => {
	const name = req.params.name
	const findFriend = await Friend.findOne({ where: { name: name } })
		.then(async (friend) => {
			const filename = friend.image.split('/images/')[1]
			fs.unlink(`images/${filename}`, () => {
				Friend.destroy({ where: { name: name } })
					.then(() => res.status(201).json({ message: 'Ami supprimé !' }))
					.catch((error) => res.status(400).json({ error }))
			})
		})
		.catch((error) => res.status(500).json({ error }))
}
