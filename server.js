const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
//permite enviar informações em json
app.use(express.json());
//iniciando o cors para permitir acesso de outros dominios
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
//require no diretorio de models
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))

app.listen(3001);