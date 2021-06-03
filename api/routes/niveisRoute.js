const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
.get('/niveis', NivelController.show)
.get('/niveis/:id', NivelController.findOne)
.post('/niveis', NivelController.store)
.put('/niveis/:id', NivelController.update)
.delete('/niveis/:id', NivelController.destroy)

module.exports = router;