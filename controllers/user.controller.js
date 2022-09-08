const { response } = require("express");
const Usuario = require("../models/usuario");

const usuariosGet = async (req, res = response) =>  {

    //const {q, p, nombre = 'no nombre'} = req.query;

    const usuarios = await Usuario.find();

    res.json({
        msg: 'get API - Controlador',
        usuarios
    });
};

const usuariosPost = async(req, res = response) =>  {

    // const {nombre, edad} = req.body;
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
}

const usuariosPut = async (req, res = response) =>  {

    const {id} = req.params;
    const {password, google, correo, ...resto} = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API - controlador',
        usuario
    });
}

const usuariosDelete = async (req, res = response) =>  {

    const {id} = req.params;

    const usuario = await Usuario.findByIdAndDelete(id);

    res.json({
        msg: 'delete API - controlador',
        usuario
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}