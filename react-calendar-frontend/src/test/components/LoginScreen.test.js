import '@testing-library/jest-dom';

import React from 'react';
import Swal from 'sweetalert2';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import { LoginScreen } from '../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
  startLogin: jest.fn(),
  startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { };

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <LoginScreen />
  </Provider>
);

describe('Testing with <LoginScreen />', () => {

  beforeEach(() => {
    jest.clearAllMocks(); // Limpieza de mocks antes de cada test
  });

  test('should show correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('should call dispatch to login', () => {

    wrapper.find('input[name="lEmail"]').simulate('change', {
      target: {
        name: 'lEmail',
        value: 'raywayday@gmail.com',
      }
    });

    wrapper.find('input[name="lPassword"]').simulate('change', {
      target: {
        name: 'lPassword',
        value: '123456',
      }
    });

    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });

    expect( startLogin ).toHaveBeenCalledWith('raywayday@gmail.com', '123456');
  });

  test('No registration if passwords are different', () => {
    
    wrapper.find('input[name="rPassword"]').simulate('change', {
      target: {
        name: 'rPassword',
        value: '1234567',
      }
    });

    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123456',
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });
    
    expect( startRegister ).not.toHaveBeenCalled();
    expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Las contraseñas deben ser iguales', 'error');
  });

  test('should call startRegister', () => {
    wrapper.find('input[name="rPassword"]').simulate('change', {
      target: {
        name: 'rPassword',
        value: '123456',
      }
    });

    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123456',
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });

    expect( Swal.fire ).not.toHaveBeenCalled();
    expect( startRegister ).toHaveBeenCalled();
  });
  
});
