const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
    nome: String,
    telefone: String,
    email: {
        Type: String,
        required: [true, "Email é obrigatório"],
    },
    senha: {
        type: String,
        default: null,
    },
    foto: String,
    dataNascimento: Date,
    sexo: String,
    status: String,
    contaBancaria: {
        titular: String,
        cpfCnpj: String,
        banco: String,
        tipo: String,
        agencia: String,
        numero: String,
        dv: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
    recipientId: String,
});

module.exports = mongoose.model('Colaborador', colaborador);