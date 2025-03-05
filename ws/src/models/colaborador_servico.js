const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador_Servico = new Schema({
    colaboradorId: {
        type: Schema.Types.ObjectId,
        ref: "Colaborador",
    },
    servicoId: {
        type: Schema.Types.ObjectId,
        ref: "Servico",
    },
    status: String,
    dataCadastro: String,
});

module.exports = mongoose.model('Colaborador_Servico', colaborador_servico);