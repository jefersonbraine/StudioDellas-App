const mongoose = require('mongoose');
const salao = require('./salao');
const Schema = mongoose.Schema;

const salao_cliente = new Schema({
    salaoId: {
        type: Schema.Types.ObjectId,
        ref: "Salao",
    },
    clienteId: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
    },
    status: String,
    dataCadastro: String,
});

module.exports = mongoose.model('Salao_Cliente', salao_cliente);