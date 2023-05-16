import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for ( const input of formJson ) {
  initialValues[input.name] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string();

  for (const rule of input.validations ) {
    if( rule.type === 'required') {
      schema = schema.required('Required')
    }
    // Other rules
    if( rule.type === 'minLength') {
      schema = schema.min(rule.value as any, `The minimum number of characters is ${ rule.value }`)
    }

    if( rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }
  }
  
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ (values) => {
          console.log(values);
        }}
      >
        { (formik) => (
          <Form noValidate>
            { 
              formJson.map(({ type, name, placeholder, label, options }) => {
                if( type === 'input' || type === 'password' || type === 'email' ) {
                  return <MyTextInput
                    key={ name }
                    label={ label }
                    placeholder={ placeholder }
                    name={ name }
                    type={ type as any }
                  />
                } else if( type === 'select' ) {
                  return <MySelect key={ name } label={ label } name={ name } >
                    <option value="">Select an option</option>
                    {
                      options!.map(({ id, label }) => {
                        return <option key={ id } value={ id }>{ label }</option>
                      })
                    }
                  </MySelect>
                }

                return <span>Type: { type } is not allowed</span>
              })
            }
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
