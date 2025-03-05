const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        Type: String,
        required: [true, "Nome é obrigatório"],
    },
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
    status: String,
    sexo: String,
    dataNascimento: Date,
    documento: {
        tipo: String,
        numero: String,
    },
    endereco: {
        cidade: String,
        uf: String,
        pais: String,
        numero: String,
        cep: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Cliente", cliente);