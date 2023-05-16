
import logo from '../logo.svg';

import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo"></img>
          <ul>
            <li>
              <NavLink to='/formik-abstraction' className={({ isActive }) => isActive ? 'nav-active' : '' } >Formik Abstaction</NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : '' } >Formik Components</NavLink>
            </li>
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
          <Route path='formik-abstraction' element={ <FormikAbstraction /> } />
          <Route path='formik-components' element={ <FormikComponents /> } />
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
