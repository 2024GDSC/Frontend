import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ onClose, title, children }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay (background) is clicked, not the modal content
    if (e.target.classList.contains("modal")) {
      handleClose();
    }
  };

  return (
    <div>
      <div className="modal-overlay"></div>
      <div
        className={`modal ${isVisible ? "d-block" : "d-none"}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">{title}</h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body p-5 pt-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
