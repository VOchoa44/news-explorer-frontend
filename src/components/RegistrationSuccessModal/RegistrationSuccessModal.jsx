import "./RegistrationSuccessModal.css";

function RegistrationSuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <div
      className={`modal modal_type_registration-success ${
        isOpen ? "modal_opened" : ""
      }`}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal__content">
        <h2 className="modal__title">Registration successfully completed!</h2>

        <button
          type="button"
          onClick={onClose}
          className="modal__close"
        ></button>

        <button
          type="button"
          onClick={onLoginClick}
          className="modal__secondary-button"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegistrationSuccessModal;
