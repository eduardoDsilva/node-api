const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

//definindo o Scheema do BD
const ProductScheema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

//inserindo o plugin do mongoose-paginate após a criação do Scheema
ProductScheema.plugin(mongoosePaginate);

//registrando o model na aplicacao
mongoose.model('Product', ProductScheema);