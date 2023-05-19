import { types } from "../types/types";
// {
//   id: new Date().getTime(),
//   title: 'Register Social Service',
//   start: moment().toDate(),
//   end: moment().add(2, 'days').toDate(),
//   bgcolor: '#fafafa',
//   notes: 'Comprar el pastel',
//   user: {
//     _id: '123',
//     name: 'César Arellano'
//   }
// }

const initialState = {
  events: [],
  actionEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {
  switch (action.type) {

    case types.eventsLoaded:
      return {
        ...state,
        events: [ ...action.payload ]
      };
    
    case types.eventAddNew:
      return {
        ...state,
        events: [ ...state.events, action.payload ]
      };
    
    case types.eventSetActive:
      return {
        ...state,
        actionEvent: action.payload
      }
    case types.eventClearActiveEvent:
      return {
        ...state,
        actionEvent: null
      }
    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map(
          e => ( e.id === action.payload.id ) ? action.payload : e
        )
      }
    case types.eventDelete:
      return {
        ...state,
        events: state.events.filter(
          e => ( e.id !== action.payload.id )
        ),
        actionEvent: null
      }
    default:
      return state;
  }
};