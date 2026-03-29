const HomeModel = require('../models/HomeModels.js')

HomeModel.find()
  .then(dados => {
    console.log(dados)
  })
  
exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo:'isso é apenas um teste',
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST.');
    return
};