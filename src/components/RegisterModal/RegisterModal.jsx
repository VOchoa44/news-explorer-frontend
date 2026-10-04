import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegister }) {
  const defaultValues = {
    email: "",
    password: "",
    username: "",
  };

  const validationRules = {
    email: (value) => {
      if (!value) return "Email is required";

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) return "Invalid email address";

      if (value === "test@example.com") {
        return "This email is not available";
      }

      return "";
    },
    password: (value) => {
      if (!value) return "Password is required";
      return "";
    },
    username: (value) => {
      if (!value) return "Username is required";
      return "";
    },
  };

  const { values, handleChange, isValid, errors, resetForm } =
    useFormWithValidation(defaultValues, validationRules);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onRegister();
    resetForm();
  }

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign up"
      secondaryButtonPrefix="or"
      secondaryButtonText="Sign in"
      onSecondaryClick={onLoginClick}
      onSubmit={handleFormSubmit}
      isValid={isValid}
      registerError={errors.email}
    >
      <label className="modal__label modal__label_input">
        Email
        <input
          type="email"
          className="modal__input"
          name="email"
          placeholder="Enter email"
          required
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && errors.email !== "This email is not available" && (
          <span className="modal__input-error">{errors.email}</span>
        )}
      </label>
      <label className="modal__label modal__label_input">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          placeholder="Enter your password"
          required
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__input-error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label modal__label_input">
        Username
        <input
          type="text"
          className="modal__input"
          name="username"
          placeholder="Enter your username"
          required
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && (
          <span className="modal__input-error">{errors.username}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
