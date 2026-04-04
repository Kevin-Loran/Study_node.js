const express = require("express");
const router = express.Router();
const homeControllers = require('./src/controllers/homeControllers');
const loginControllers = require('./src/controllers/loginControllers')

//Rotas da home 
router.get('/', homeControllers.index);


//Rotas de login
router.get('/login/index', loginControllers.index)

module.exports = router;