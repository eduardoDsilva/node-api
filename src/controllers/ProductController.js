const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //pegando a pagina passada por parametro, caso nao tenha, utiliza o padrao da primeira pagina
        const { page = 1 } = req.query;
        //buscando todos os produtos com o paginate do mongoose-paginate
        const products = await Product.paginate({}, {page, limit: 10});
        //retornando os produtos em json
        return res.json(products);
    },

    async show(req, res){
        //buscando o produto pelo id
        const product = await Product.findById(req.params.id);
        //retornando o produto em json
        return res.json(product);
    },

    async store(req, res){
        //criando o produto com base no corpo da requisição
        const product = await Product.create(req.body);
        //retornando o produto criado em json
        return res.json(product);
    },

    async update(req, res){
        //atualizando o produto recebido por id com base no corpo da requisição
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        //retornando o produto atualizado em json
        return res.json(product);
    },

    async destroy(req, res){
        //procurando e removendo o produto recebido por parametro
        await Product.findByIdAndRemove(req.params.id);
        //retornando o produto atualizado em json
        return res.send();
    },
};