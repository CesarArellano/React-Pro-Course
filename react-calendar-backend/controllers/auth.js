const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async ( req, res = response ) => {
  
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email })

    if( user ) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe con ese correo.'
      });
    }

    user = new User( req.body );

    // Encript pass
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt)

    user.save();

    // Generate JWT
    const token = await generateJWT( user.id, user.name );

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch(error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please talk to the admin'
    });
  }
  
}

const userLogin = async ( req, res = response ) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })

    if( !user ) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese correo.'
      });
    }

    const validPassword = bcrypt.compareSync( password, user.password );

    if( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario y/o contraseña son incorrectos '
      });
    }

    // Generar JWT.
    const token = await generateJWT( user.id, user.name );

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please talk to the admin'
    });
  }

};

const revalidateToken = async ( req, res = response ) => {
  const { uid, name } = req;

  // Generate JWT
  const token = await generateJWT(uid, name);
  res.json({
    ok: true,
    uid,
    name,
    token
  });
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken
};