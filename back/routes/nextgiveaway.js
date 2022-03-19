const express = require('express')
const router = express.Router()
const nextgiveawayCtrl = require('../controllers/nextgiveaway')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, nextgiveawayCtrl.create)
router.get('/getAll', nextgiveawayCtrl.getAll)
router.delete('/:id/delete', multer, nextgiveawayCtrl.delete)

module.exports = router
