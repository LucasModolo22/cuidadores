const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    sexo: {
        type: String,
        required: true,
    },
    dataNsc: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    info: {
        type: Object,
        required: true,
        default: {}
    },
    calendario: {
        type: Object,
        required: true,
        default: {}
    }
});

module.exports = mongoose.model('Pacientes', schema);