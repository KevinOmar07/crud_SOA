
const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROL', 'USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    },
});

module.exports = model('Usuario', UsuarioSchema);