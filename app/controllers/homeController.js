// app/controllers/homeController.js
const model = require('../models/index');

const home = async (req, res) => {
  try {
    // opcional: testar conexão
    await model.testConnection();
    res.render('home', { title: 'Supz - Home', message: 'Servidor rodando e DB conectado.' });
  } catch (err) {
    // enviar mensagem de erro simples na view
    res.render('home', { title: 'Supz - Home', message: 'Erro ao conectar ao DB: ' + err.message });
  }
};

module.exports = {
  home
};
