import { SyntheticEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  const { formValues, handleChange, handleReset, isValidEmail } = useForm({
    name: '',
    email: '',
    password: '',
    password_2: '',
  })
  
  const { name, email, password, password_2 } = formValues;

  const handleSubmit = (e: SyntheticEvent ) => {
    e.preventDefault();
    if( isValidEmail(email) ) {
      return;
    }
    console.log(formValues);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={ handleSubmit }>
        <input 
          type="text" 
          placeholder='Name'
          className={ `${ name.trim().length <= 0 && 'has-error' }` }
          name="name"
          value={ name }
          onChange={ (e) => handleChange('name', e.target.value ) }
        />
        { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        <input 
          type="email" 
          placeholder='Email'
          className={ `${ !isValidEmail(email) && 'has-error' }` }
          name="email"
          value={ email }
          onChange={ (e) => handleChange('email', e.target.value ) }
        />
        { !isValidEmail(email) && <span>Email no válido </span> }
        <input 
          type="password" 
          placeholder='Password'
          name="password"
          value={ password }
          onChange={ (e) => handleChange('password', e.target.value ) }
        />
        <input 
          type="password" 
          placeholder='Repeat password'
          name="password_2"
          value={ password_2 }
          onChange={ (e) => handleChange('password_2', e.target.value ) }
        />
        <button type='submit'>Create</button>
        <button type='reset' onClick={ handleReset }>Reset</button>
      </form>
    </div>
  )
}
