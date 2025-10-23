
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// view engine
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// static files
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// routes
const homeRoutes = require('./app/routes/homeRoutes');
app.use('/', homeRoutes);

// start server
app.listen(port, () => {
  console.log(`Servidor SUPZ rodando em http://localhost:${port}`);
});
