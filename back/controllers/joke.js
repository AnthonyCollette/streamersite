const { Sequelize, Model, DataTypes, JSONB } = require('sequelize')
const { Joke } = require('../models')
const jwt = require('jsonwebtoken')

exports.create = async (req, res, next) => {
	const NewJoke = await Joke.findOne({ where: { id: '1' } }).catch((error) =>
		res.status(500).json({ error })
	)

	NewJoke.text = req.body.text

	await NewJoke.save()
		.then(() => res.status(201).json())
		.catch((error) => res.status(500).json({ error }))
}

exports.getAll = async (req, res, next) => {
	const jokes = await Joke.findAll().then((Joke) => {
		res.status(200).json(Joke)
	})
}
