import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password_2: ''
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={ Yup.object({
          name: Yup.string()
                  .min(2, 'Minimum 2 characters')
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
          email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
          password: Yup.string()
                        .min(6, 'Minimum 6 characters')
                        .required('Required'),
          password_2: Yup.string()
                        .oneOf([ Yup.ref('password') ], 'Passwords are not the same')
                        .required('Required')
        })}
      >
        {
          (formik) => (
            <Form noValidate>
              <MyTextInput label='Name' name='name'/>
              <MyTextInput label='Email' name='email' type='email'/>
              <MyTextInput label='Password' name='password'/>
              <MyTextInput label='Repeat Password' name='password_2'/>
              <button type='submit'>Create</button>
              <button type='reset' onClick={ formik.handleReset }>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
