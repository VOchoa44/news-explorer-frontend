import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  secondaryButtonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  onSecondaryClick,
  secondaryButtonPrefix,
  registerError,
}) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          onClick={onClose}
          className="modal__close"
        ></button>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <div className="modal__buttons">
            {registerError === "This email is not available" && (
              <span className="modal__register-error">{registerError}</span>
            )}
            <button
              type="submit"
              className={`modal__submit ${
                isValid ? "modal__submit_active" : ""
              }`}
            >
              {buttonText}
            </button>

            {secondaryButtonText && (
              <div className="modal__secondary">
                {secondaryButtonPrefix && (
                  <span className="modal__secondary-prefix">
                    {secondaryButtonPrefix}
                  </span>
                )}
                <button
                  type="button"
                  onClick={onSecondaryClick}
                  className="modal__secondary-button"
                >
                  {secondaryButtonText}
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
