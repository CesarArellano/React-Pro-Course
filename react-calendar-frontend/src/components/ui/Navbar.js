import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { Online, Offline } from 'react-detect-offline';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);
  const handleLogout = () => {
    dispatch( startLogout() );
  }


  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">
        { name }
      </span>
      <Online><span className='text-success'>Online</span></Online>
      <Offline><span className='text-warning'>Offline- Requests will be saved</span></Offline>
      <button onClick={ handleLogout } className="btn btn-outline-danger">
        <span className="textButton">Salir</span>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  )
}
