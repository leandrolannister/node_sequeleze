const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
.get('/pessoas', PessoaController.show)
.get('/pessoas/:id', PessoaController.findOne)
.post('/pessoas', PessoaController.store)
.put('/pessoas/:id', PessoaController.update)
.delete('/pessoas/:id', PessoaController.destroy)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.showMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.storeMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.destroyMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);

module.exports = router;
  