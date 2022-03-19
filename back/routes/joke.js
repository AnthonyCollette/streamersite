const express = require('express')
const router = express.Router()
const jokeCtrl = require('../controllers/joke')

router.post('/create', jokeCtrl.create)
router.get('/getAll', jokeCtrl.getAll)

module.exports = router
