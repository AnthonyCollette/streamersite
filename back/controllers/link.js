const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Link } = require('../models')
const jwt = require('jsonwebtoken')

exports.create = async (req, res, next) => {
	const newLink = await Link.create({
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
	})
	res.status(201).json()
}

exports.getAll = async (req, res, next) => {
	const Links = await Link.findAll()
		.then((Link) => {
			res.status(200).json(Link)
		})
		.catch((error) => console.log({ error }))
}

exports.delete = async (req, res, next) => {
	const id = req.params.id
	const findLink = await Link.destroy({ where: { id: id } })
		.then(() => res.status(201).json({ message: 'Lien supprimé !' }))
		.catch((error) => res.status(400).json({ error }))
}
