const { Router } =  require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
.get('/turmas', TurmaController.show)
.get('/turma/:id', TurmaController.findOne)
.post('/turmas', TurmaController.store)
.put('/turma/:id', TurmaController.update)
.delete('/turma/:id', TurmaController.destroy);

 
module.exports = router