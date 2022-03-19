const express = require('express')
const router = express.Router()
const gamedoneCtrl = require('../controllers/gamedone')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, gamedoneCtrl.create)
router.get('/getAll', gamedoneCtrl.getAll)
router.delete('/:id/delete', multer, gamedoneCtrl.delete)

module.exports = router
