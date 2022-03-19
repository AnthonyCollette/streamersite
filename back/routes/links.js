const express = require('express')
const router = express.Router()
const linkCtrl = require('../controllers/link')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')

router.post('/create', multer, linkCtrl.create)
router.get('/getAll', multer, linkCtrl.getAll)
router.delete('/:id/delete', linkCtrl.delete)

module.exports = router
