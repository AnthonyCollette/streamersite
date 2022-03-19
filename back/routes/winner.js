const express = require('express')
const router = express.Router()
const winnerCtrl = require('../controllers/winner')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, winnerCtrl.create)
router.get('/getAll', winnerCtrl.getAll)
// router.delete('/:id/delete', multer, winnerCtrl.delete)

module.exports = router
