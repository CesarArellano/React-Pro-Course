import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { AppRouter } from '../../routers/AppRouter';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Testing in <AppRouter />', () => {
  test('It should show waiting message', () => {
    const initState = { 
      auth: {
        checking: true
      }
    };
    
    const store = mockStore( initState );

    const wrapper = mount(
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.utils__spinner').exists() ).toBe(true);
  });

  test('It should show the public route', () => {
    const initState = { 
      auth: {
        uid: null,
        checking: false
      }
    };
    
    const store = mockStore( initState );
    
    const wrapper = mount(
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.login-container').exists() ).toBe(true);
  });

  test('It should show the public route', () => {
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
    
    const wrapper = mount(
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.calendar-screen').exists() ).toBe(true);
  });
});
