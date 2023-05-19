import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';

import '@testing-library/jest-dom';

import { startChecking, startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const iniState = { };

let store = mockStore( iniState );
let token = '';

Storage.prototype.setItem = jest.fn();

describe('Testing with auth actions', () => {

  beforeEach(() => {
    store = mockStore( iniState );
    jest.clearAllMocks();
  });

  test('startLogin correct', async () => {
    await store.dispatch( startLogin('cesarmauricio.arellano@gmail.com', '123456') );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.authLogin,
      payload: {
        uid: expect.any(String),
        name: expect.any(String),
      }
    });

    expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
    expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));
    
    token = localStorage.setItem.mock.calls[0][1];
    console.log( token );
  });

  test('starLogin incorrect', async () => {
    await store.dispatch( startLogin('cesarmauricio.arellano@gmail.com', '12345678') );
    let actions = store.getActions();
    expect( actions ).toEqual([]);
    expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Usuario y/o contraseña son incorrectos ', 'error');
    await store.dispatch( startLogin('cesarmauricio.arellano2@gmail.com', '123456') );
    actions = store.getActions();
    expect( Swal.fire ).toHaveBeenCalledWith('Error', 'El usuario no existe con ese correo.', 'error');
  });
  
  test('startRegister correct', async () => {
    fetchModule.fetchWithoutToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'juan',
          token: 'ABC123'
        }
      }
    }));

    await store.dispatch( startRegister('test2@test.com', '123456', 'test'));
    const actions = store.getActions();
    
    expect( actions[0] ).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'juan'
      }
    });

    expect( localStorage.setItem ).toHaveBeenCalledWith('token', 'ABC123');
    expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));
  });
  
  test('startChecking correct', async () => {

    fetchModule.fetchWithToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'juan',
          token: 'ABC123'
        }
      }
    }));

    await store.dispatch( startChecking() );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'juan'
      }
    });

    expect( localStorage.setItem ).toHaveBeenCalledWith('token', 'ABC123');
  })
  
})
