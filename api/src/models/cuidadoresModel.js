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
    genero: {
        type: String,
        required: true,
    },
    dataNsc: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    pacientes: [{
        type: String,
        require: true,
        default: ""
    }],
    calendario: {
        type: Object,
        required: true,
        default: {}
    }
});

module.exports = mongoose.model('Cuidadores', schema);