import { useState } from 'react'

export const useForm = <T extends Object>( initialValues: T ) => {
  
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (key: keyof T, value: string) => {
    setFormValues({
      ...formValues,
      [key]: value
    })
  }

  const handleReset = () => {
    setFormValues(initialValues);
  }

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    formValues,
    handleChange,
    handleReset,
    isValidEmail,
  }
}
