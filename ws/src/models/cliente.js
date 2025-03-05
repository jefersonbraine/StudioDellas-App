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
  status: {
    type: String,
    enum: ["A", "I", "E"],
    required: true,
    default: "A",
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    default: null,
  },
  dataNascimento: Date,
  documento: {
    tipo: {
      type: String,
      enum: ["individual", "corporation"],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endereco: {
    cidade: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cliente", cliente);