const { response } = require('express');
const { eventNames } = require('../models/Event');
const Event = require('../models/Event');

const getEvents = async ( req, res = response ) => {

  try {
    const events = await Event.find()
                            .populate('user', 'name') // Rellena datos del usuario;
    
    res.json({
      ok: true,
      events
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }
};

const createEvent = async ( req, res = response ) => {
  // Verificar el evento.

  const event = new Event( req.body );

  try {
    event.user = req.uid;

    const savedEvent = await event.save();
    res.json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }

};

const updateEvent = async ( req, res = response ) => {
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Event.findById(eventId);
    if( !event ) {
      return res.status(404).json({
        ok: false,
        msg: 'There is no event'
      }); 
    }

    if( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      });
    }

    const newEvent = {
      ...req.body,
      user: uid
    };

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    res.json({
      ok: true,
      event: updatedEvent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }

};

const deleteEvent = async ( req, res = response ) => {
  
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);
    if( !event ) {
      return res.status(404).json({
        ok: false,
        msg: 'There is no event'
      }); 
    }

    if( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento'
      });
    }

    await Event.findByIdAndDelete(eventId);

    res.json({ ok: true });
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}