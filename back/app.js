const express = require('express')
const app = express()
const mysql = require('mysql2')
const { Sequelize } = require('sequelize')
const userRoutes = require('./routes/user')
const bodyParser = require('body-parser')
const jokeRoutes = require('./routes/joke')
const friendRoutes = require('./routes/friend')
const gamedoneRoutes = require('./routes/gamesdone')
const gamesinprogressRoutes = require('./routes/gamesinprogress')
const nextgiveawayRoutes = require('./routes/nextgiveaway')
const winnerRoutes = require('./routes/winner')
const linksRoutes = require('./routes/links')
const path = require('path')

require('dotenv').config()

// Connexion à MYSQL

const sequelize = new Sequelize('mysql://root@localhost/neikko')

try {
	sequelize.authenticate()
	console.log('Connexion réussie !')
} catch (error) {
	console.log('Connexion échouée !')
}

app.use(bodyParser.json())

// Permet à tout le monde d'accéder à l'API

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	)
	next()
})

app.use('/api/auth', userRoutes)
app.use('/api/joke', jokeRoutes)
app.use('/api/friend', friendRoutes)
app.use('/api/gamesdone', gamedoneRoutes)
app.use('/api/gamesinprogress', gamesinprogressRoutes)
app.use('/api/nextgiveaway', nextgiveawayRoutes)
app.use('/api/winner', winnerRoutes)
app.use('/api/links', linksRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app
