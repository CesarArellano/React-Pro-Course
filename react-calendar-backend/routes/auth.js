/*
  Ruta de Usuarios / Auth
  host + api/auth/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { createUser, userLogin, revalidateToken } = require('../controllers/auth');

router.post(
  '/new',
  [ // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    validateFields,
  ],
  userLogin
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;