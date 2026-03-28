const HomeModel = require('../models/HomeModels.js')

HomeModel.find()
  .then(dados => {
    console.log(dados)
  })
  
exports.paginaInicial = (req, res) => {
  req.session.usuario = {nome: 'kevin', logado: true};
  res.render('index');
  return
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST.');
    return
};