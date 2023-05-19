/*
  Ruta de eventos
  host + api/events/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

const router = Router();

// All endpoints will validate the JWT
router.use( validateJWT );

// Get events.
router.get( '/', getEvents );

// Create a new event.
router.post(
  '/', 
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
    validateFields
  ],
  createEvent 
);

// Update event
router.put( '/:id', updateEvent );

// Delete event
router.delete( '/:id', deleteEvent );

module.exports = router;