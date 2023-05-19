import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepare-events";
import { types } from "../types/types";

export const eventStartAddNew = ( event ) => {
  return async ( dispatch, getState ) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchWithToken('events', event, 'POST');
      const decodedData = await resp.json();
      console.log(decodedData);
      if( decodedData.ok ) {
        event.id = decodedData.event.id;
        event.user = {
          _id: uid,
          name
        };
        dispatch( eventAddNew( event ) );
      }

    } catch (error) {
      console.log(error);
    }
  };
}

const eventAddNew = ( event ) => ({
  type: types.eventAddNew,
  payload: event
});

export const eventSetActive = ( event ) => ({
  type: types.eventSetActive,
  payload: event
});

export const eventClearActiveEvent = ( ) => ({ type: types.eventClearActiveEvent });

export const eventStartUpdate = ( event ) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(`events/${ event.id }`, event, 'PUT');
      const decodedData = await resp.json();
      if( decodedData.ok ) {
        dispatch( eventUpdate(decodedData.event) )
      } else {
        Swal.fire('Attention', decodedData.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Attention', 'No se pudo actualizar el evento', 'error');
    }  
  };
}

const eventUpdate = ( event ) => ({
  type: types.eventUpdate,
  payload: event
});

export const eventStartDelete = () => {
  return async (dispatch, getState) => {
    const { actionEvent } = getState().calendar;
    try {
      const resp = await fetchWithToken(`events/${ actionEvent.id }`, {}, 'DELETE');
      const decodedData = await resp.json();
      if( decodedData.ok ) {
        dispatch( eventDelete(actionEvent) )
      } else {
        Swal.fire('Attention', decodedData.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Attention', 'No se pudo eliminar el evento', 'error');
    }
  };
}

const eventDelete = ( event ) => ({
  type: types.eventDelete,
  payload: event
});


export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken('events');
      const decodedData = await resp.json();

      if( decodedData.ok ) {
        const events = prepareEvents(decodedData.events);
        dispatch( eventsLoaded( events ) );
      }
    } catch (error) {
      console.log(error);
    }

  };
}

const eventsLoaded = (events) => ({
  type: types.eventsLoaded,
  payload: events,
});