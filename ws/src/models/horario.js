const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
  salaoId: {
    type: Schema.Types.ObjectId,
    ref: "Salao",
  },
  especialidades: {
    type: Schema.Types.ObjectId,
    ref: "especialidades",
  },
  colaboradores: {
    type: Schema.Types.ObjectId,
    ref: "colaboradores",
  },
  dias: [Number],
  inicio: Date,
  fim: Date,
  dataCadastro: Date,
});

module.exports = mongoose.model('Horario', horario);