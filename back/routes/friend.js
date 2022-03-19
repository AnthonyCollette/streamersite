const express = require('express')
const router = express.Router()
const friendCtrl = require('../controllers/friend')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, friendCtrl.create)
router.get('/getAll', friendCtrl.getAll)
router.delete('/:name/delete', multer, friendCtrl.delete)

module.exports = router
