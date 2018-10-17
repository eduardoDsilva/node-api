const express = require('express');
const routes = express.Router();

//chamando o controller do produto
const ProductController = require('./controllers/ProductController')

//rotas
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//exportando as rotas
module.exports = routes;