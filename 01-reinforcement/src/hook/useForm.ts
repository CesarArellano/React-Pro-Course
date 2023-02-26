import { useState } from "react"

export const useForm = <T extends Object> (initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState);

  const handleOnChange = (key: keyof T, value: string) => {
    setFormValues({
      ...formValues,
      [key]: value,
    })
  }

  const handleReset = () => {
    setFormValues(initialState);
  }

  return {
    formValues,
    handleOnChange,
    handleReset,
  }
}
