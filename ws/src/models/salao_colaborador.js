const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao_colaborador = new Schema({
    colaboradorId: {
        type: Schema.Types.ObjectId,
        ref: "Colaborador",
    },
    status: String,
    dataCadastro: String,
    
});

module.exports = mongoose.model('Salao_Colaborador', salao_colaborador);

