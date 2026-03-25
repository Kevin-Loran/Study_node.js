const express = require("express");
const router = express.Router();
const contatoControllers = require('./src/controllers/contatoControllers');
const homeControllers = require('./src/controllers/homeControllers');

//Rotas da home 
router.get('/', homeControllers.paginaInicial);
router.post('/', homeControllers.trataPost);

//Rotas de contato
router.get('/contato', contatoControllers.paginaInicial);

module.exports = router;