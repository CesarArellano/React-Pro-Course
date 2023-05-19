const { response } = require('express');
const { validationResult } = require('express-validator');

// next = Es una instrucción que se ejecuta de manera automática en el check.
const validateFields = ( req, res = response, next ) => {

  // Error Handling
  const errors = validationResult( req );
  
  if( !errors.isEmpty() )  {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  next();
  
};


module.exports = {
  validateFields
}