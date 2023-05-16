
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo"></img>
          <ul>
            <li>
              <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : '' } >Register</NavLink>
            </li>
            <li>
              <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : '' } >Home</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='formik-yup' element={ <FormikYupPage /> } />
          <Route path='formik-basic' element={ <FormikBasicPage /> } />
          <Route path='register' element={ <RegisterPage /> } />
          <Route path='home' element={ <h1>Home</h1> } />
          <Route path='/*' element={ <Navigate to="home" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
