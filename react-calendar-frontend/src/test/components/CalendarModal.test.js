import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { act } from '@testing-library/react';

import { CalendarModal } from '../../components/calendar/CalendarModal';
import moment from 'moment';
import { eventStartUpdate, eventClearActiveEvent, eventStartAddNew } from '../../actions/events';
import Swal from 'sweetalert2';

jest.mock('../../actions/events', () => ({
  eventStartUpdate: jest.fn(),
  eventClearActiveEvent: jest.fn(),
  eventStartAddNew: jest.fn()
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initState = { 
  ui: {
    modalOpen: true,
  },
  calendar: {
    events: [],
    actionEvent: {
      title: 'Hello World',
      notes: 'Some notes',
      start: now.toDate(),
      end: nowPlus1.toDate()
    }
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
    <CalendarModal />
  </Provider>
);

Storage.prototype.setItem = jest.fn();

describe('Testing with <CalendarModal />', () => {
  
  beforeEach(() => {
    jest.clearAllMocks(); // Best Practice
  });

  test('Should show the modal', () => {
    expect( wrapper.find('Modal').prop('isOpen') ).toBe(true);
  });

  test('should call update and close modal action ', () => {

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( eventStartUpdate ).toHaveBeenCalledWith( initState.calendar.actionEvent );
    expect( eventClearActiveEvent ).toHaveBeenCalled();
  });
  
  test('Should have is-invalid class', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe(true);
  });

  test('should create new event', () => {
    const initState = { 
      ui: {
        modalOpen: true,
      },
      calendar: {
        events: [],
        actionEvent: null
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
        <CalendarModal />
      </Provider>
    );
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hello testing'
      }
    });

    act(()=> {
      wrapper.find('form').simulate('submit', {
        preventDefault(){}
      });
    })

    expect( eventStartAddNew ).toHaveBeenCalledWith({
      end: expect.anything(),
      start: expect.anything(),
      title: 'Hello testing',
      notes: ''
    });

    expect( eventClearActiveEvent ).toHaveBeenCalled();
    
  });

  test('It should validate dates', () => {
    wrapper.find('input[name="title"]').simulate('change',{
      target: {
        name: 'title',
        value: 'Hola pruebas'
      }
    });

    const now = new Date();

    act(()=> {
      wrapper.find('DateTimePicker').at(0).prop('onChange')(now);
      wrapper.find('DateTimePicker').at(1).prop('onChange')(new Date(4));
      wrapper.find('form').simulate('submit', {
        preventDefault(){}
      });
    })
    expect( Swal.fire ).not.toHaveBeenCalled()

  });
  
});
