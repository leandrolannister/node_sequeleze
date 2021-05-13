const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.show);

router.get('/pessoas/:id', PessoaController.findOne);

router.put('/pessoas/:id', PessoaController.update);

router.delete('/pessoas/:id', PessoaController.destroy);

module.exports = router;
  