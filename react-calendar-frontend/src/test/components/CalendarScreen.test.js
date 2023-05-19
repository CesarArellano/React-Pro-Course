import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { act } from '@testing-library/react';

import { CalendarScreen } from '../../components/calendar/CalendarScreen';
import { esMessages } from '../../helpers/calendar-messages';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';

jest.mock('../../actions/events', () => ({
  eventSetActive: jest.fn(),
  eventStartLoading: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { 
  ui: {
    modalOpen: false,
  },
  calendar: {
    events: []
  },
  auth: {
    uid: '12345',
    name: 'Jorge',
    checking: false
  }
};

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <CalendarScreen />
  </Provider>
);

Storage.prototype.setItem = jest.fn();

describe('Testing with <CalendarScreen />', () => {
  
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('tests with calendar interactions', () => {
    const calendar = wrapper.find('Calendar');
    
    const calendarMessages = calendar.prop('messages');
    expect( calendarMessages ).toEqual( esMessages );

    calendar.prop('onDoubleClickEvent')();
    expect( store.dispatch ).toHaveBeenCalledWith( uiOpenModal() );

    calendar.prop('onSelectEvent')({ start: 'hola' });
    expect( eventSetActive ).toHaveBeenCalledWith({ start: 'hola' });
    
    // Como se está modificando el estado usamos el act.
    act(() => {
      calendar.prop('onView')('week');
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastView', 'week');
    });

  });
  
});
