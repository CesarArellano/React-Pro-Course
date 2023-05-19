import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import { DeletingEventFab } from '../../components/ui/DeletingEventFab';
import { eventStartDelete } from '../../actions/events';

jest.mock('../../actions/events',() => ({
  eventStartDelete: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { };

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <DeletingEventFab />
  </Provider>
);

describe('Testing with DeletingEventFab Component', () => {

  test('It should show correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('It should call the eventStartDelete function when doing click', () => {
    wrapper.find('button').prop('onClick')();
    expect( eventStartDelete ).toHaveBeenCalled();
  });
  
});
