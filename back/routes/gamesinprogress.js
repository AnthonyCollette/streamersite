const express = require('express')
const router = express.Router()
const gamesinprogressCtrl = require('../controllers/gameinprogress')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, gamesinprogressCtrl.create)
router.get('/getAll', gamesinprogressCtrl.getAll)
router.delete('/:id/delete', multer, gamesinprogressCtrl.delete)

module.exports = router
