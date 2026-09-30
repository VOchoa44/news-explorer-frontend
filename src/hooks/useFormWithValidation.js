import { useState } from "react";

export function useFormWithValidation(defaultValues, validationRules) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function validateField(name, value) {
    const error = validationRules[name](value);

    setErrors({
      ...errors,
      [name]: error,
    });
    return error;
  }
  function handleChange(evt) {
    const { name, value } = evt.target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
    validateForm(newValues);
  }

  function validateForm(currentValues) {
    const newErrors = {};
    let formIsValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, currentValues[fieldName]);

      if (error) {
        newErrors[fieldName] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }

  function validateFormOnSubmit() {
    return validateForm(values);
  }

  function resetForm() {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  }

  return {
    values,
    handleChange,
    errors,
    isValid,
    validateFormOnSubmit,
    resetForm,
  };
}
