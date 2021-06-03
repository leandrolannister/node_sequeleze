const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
.get('/pessoas', PessoaController.show)
.get('/pessoas/:id', PessoaController.findOne)
.post('/pessoas', PessoaController.store)
.put('/pessoas/:id', PessoaController.update)
.delete('/pessoas/:id', PessoaController.destroy);

module.exports = router;
  