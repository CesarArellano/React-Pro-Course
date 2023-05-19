import { types } from "../../types/types";

describe('Testing with types.js', () => {
  test('Types should be equals', () => {
    expect( types ).toEqual({

      authCheckingFinish: '[AUTH] Finish checking login state',
      authLogin: '[AUTH] Login',
      authLogout: '[AUTH] Logout',
    
      uiOpenModal: '[UI] Open modal',
      uiCloseModal: '[UI] Close modal',
    
      eventSetActive: '[EVENT] Set active',
      eventAddNew: '[EVENT] Add new',
      eventStartAddNew: '[EVENT] Start add new event',
      eventsLoaded: '[EVENT] Events Loaded',
    
      eventClearActiveEvent: '[EVENT] Clear active event',
      eventUpdate: '[EVENT] Event updated',
      eventDelete: '[EVENT] Event deleted',
    
    });
  });
})
