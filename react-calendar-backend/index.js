const express = require('express');
require('dotenv').config(); // To use .env file
const { dbConnection } = require('./database/config');
const cors = require('cors');
// Create express server
const app = express();

//Base de datos 
dbConnection();

// CORS
app.use( cors() )

// Public path
app.use( express.static('public') );

// Reading and body parse
app.use( express.json() );
// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen to requests
app.listen( process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT || 3000 }`);
})