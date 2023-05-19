const moment = require('moment');

// params: ( value, { req, location, path } )
const isDate = ( value ) => {
  if( !value ) {
    return false;
  }

  const date = moment(value);
  return ( date.isValid() ) ? true : false;
};

module.exports = {
  isDate
}