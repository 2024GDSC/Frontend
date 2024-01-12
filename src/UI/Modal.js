import React, { useState } from "react";
import "./Modal.css";
import Input from "./Input";

export default function Modal({ onClose, title }) {
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
            <div class="modal-body p-5 pt-0">
              <form class="">
                <Input
                  type="email"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <Input
                  type="password"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <button
                  class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  {title}
                </button>
                {title !== "Sign in" && (
                  <small class="text-body-secondary">
                    By clicking Sign up, you agree to the terms of use.
                  </small>
                )}
                <hr class="my-4" />
                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  {title} with Twitter
                </button>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  {title} with Facebook
                </button>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  {title} with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
