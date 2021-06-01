const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
.get('/turmas', TurmaController.show)
 
module.exports = router