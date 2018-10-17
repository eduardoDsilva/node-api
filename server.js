const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//iniciando o app
const app = express();

//iniciando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models')

const Product = mongoose.model('Product');



//primera rota
app.get('/', (req, res) => {
    Product.create({
        title: "Produto de teste",
        description: 'Descrição do produto de teste',
        url: 'http://produtodeteste.com'
    })
   return res.send('Produto adicionado');
});

app.listen(3001);