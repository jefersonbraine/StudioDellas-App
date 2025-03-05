const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
  salaoId: {
    type: Schema.Types.ObjectId,
    ref: "Salao",
    },
    titulo: String,
    preco: Number,
    duracao: Number,
    comissao: Number,
    recorrencia: Number,
    descricao: String,
    status: String,
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Servico', servico);