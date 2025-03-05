const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
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
  dataNascimento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "I"],
    required: true,
    default: "A",
  },
  contaBancaria: {
    titular: {
      type: String,
      required: true,
    },
    cpfCnpj: {
      type: String,
      required: true,
    },
    banco: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    agencia: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    dv: {
      type: String,
      required: true,
    },
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
  recipientId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Colaborador', colaborador);