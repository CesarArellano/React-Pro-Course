import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ ( values ) => {
          console.log(values);
        }}
        validationSchema= {
          Yup.object({
            firstName: Yup.string()
                          .max(15, 'Must be 15 characters or less')
                          .required('Required'),
            lastName: Yup.string()
                          .max(10, 'Must be 10 characters or less')
                          .required('Required'),
            email: Yup.string()
                      .email('Invalid email address')
                      .required('Required'),
            terms: Yup.boolean()
                      .oneOf([true], 'Must accept the terms and conditions'),
            jobType: Yup.string()
                        .notOneOf(['it-junior'], 'This option is not available')
                        .required('Required'),
          })
        }
      >
        {
          ( formik ) => (
            <Form noValidate>
              <MyTextInput 
                label='First Name'
                name='firstName'
                placeholder="César"
              />
              <MyTextInput 
                label='Last Name'
                name='lastName'
                placeholder='Arellano'
              />

              <MyTextInput 
                label='Email'
                name='email'
                type='email'
              />

              <MySelect label='Job Type' name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It-Senior</option>
                <option value="it-junior">It-Junior</option>
              </MySelect>
              <br />
              <MyCheckbox  label="Terms and Conditions" name="terms" type="checkbox" />
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
