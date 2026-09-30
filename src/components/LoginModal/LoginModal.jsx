/* LoginModal.jsx */
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const validationRules = {
    email: (value) => {
      if (!value) return "Email is required";

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) return "Invalid email address";

      return "";
    },
    password: (value) => {
      if (!value) return "Password is required";
      return "";
    },
  };

  const {
    values,
    handleChange,
    isValid,
    validateFormOnSubmit,
    resetForm,
    errors,
  } = useFormWithValidation(defaultValues, validationRules);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    if (!validateFormOnSubmit()) return;
    onLogin(values);
    resetForm();
  }

  return (
    <ModalWithForm
      title="Sign in"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign in"
      isValid={isValid}
      onSubmit={handleFormSubmit}
      onSecondaryClick={onRegisterClick}
      secondaryButtonPrefix="or"
      secondaryButtonText="Sign up"
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
        {errors.email && (
          <span className="modal__input-error">{errors.email}</span>
        )}
      </label>
      <label className="modal__label modal__label_input">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          placeholder="Enter password"
          required
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__input-error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
