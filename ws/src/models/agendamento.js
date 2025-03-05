const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    salaoId: {
        type: Schema.Types.ObjectId,
        ref: "Salao",
    },
    servicoId: {
        type: Schema.Types.ObjectId,
        ref: "Servico",
    },
    colaboradorId: {
        type: Schema.Types.ObjectId,
        ref: "Colaborador",
    },
    data: Date,
    comissao: Number,
    valor: Number,
    transactionId: String,
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Agendamento', agendamento);