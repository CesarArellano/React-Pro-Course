import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

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
            <Form>
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

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It-Senior</option>
                <option value="it-junior">It-Junior</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label>
                <Field name="terms" type="checkbox" />
                Terms and Conditions
              </label>
              <ErrorMessage name="terms" component="span" />
              
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
