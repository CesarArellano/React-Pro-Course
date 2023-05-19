import Swal from 'sweetalert2';

import { types } from "../types/types";
import { eventClearActiveEvent } from './events';
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";

export const startLogin = ( email, password ) => {
  return async ( dispatch ) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
    const decodedData = await resp.json();
    
    if( decodedData.ok ) {
      localStorage.setItem( 'token', decodedData.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( login({
        uid: decodedData.uid,
        name: decodedData.name,
      }));
    } else {
      Swal.fire('Error', decodedData.msg, 'error');
    }
  }
};

export const startRegister = ( email, password, name ) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth/new', { email, password, name }, 'POST');
    const decodedData = await resp.json();
    
    if( decodedData.ok ) {
      localStorage.setItem( 'token', decodedData.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( login({
        uid: decodedData.uid,
        name: decodedData.name,
      }));
    } else {
      Swal.fire('Error', decodedData.msg, 'error');
    }
  }
};

export const startChecking = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken('auth/renew');
      const decodedData = await resp.json();

      if( decodedData.ok ) {
        localStorage.setItem( 'token', decodedData.token );
        localStorage.setItem( 'token-init-date', new Date().getTime() );
        dispatch( login({
          uid: decodedData.uid,
          name: decodedData.name,
        }));
      } else {
        dispatch( checkingFinish() );
      }
    } catch(e) {
      Swal.fire('Error', e, 'error');
      dispatch( checkingFinish() );
    }
    
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return ( dispatch ) => {
    localStorage.clear();
    dispatch( eventClearActiveEvent() );
    dispatch( logout() );
  }
}

const logout = () => ({ type: types.authLogout });