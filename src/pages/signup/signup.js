import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../Assets/images/logo.png";
import SignupInput from "../../UI/SignupInput";

export default function Signup() {
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validity =
    firstNameValid && lastNameValid && emailValid && passwordValid;

  const navigate = useNavigate();

  const handleValidityChange = (field, isValid) => {
    switch (field) {
      case "firstName":
        setFirstNameValid(isValid);
        break;
      case "lastName":
        setLastNameValid(isValid);
        break;
      case "email":
        setEmailValid(isValid);
        break;
      case "password":
        setPasswordValid(isValid);
        break;
      // Handle other fields similarly
      default:
        break;
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    // Additional logic if needed before navigating

    // Navigate to the main page if validity is true
    if (validity) {
      navigate("/"); // Replace "/" with the actual path of your main page
    }
  };

  return (
    <div class="container">
      <div class="py-4 text-center ">
        <a href="/">
          <img
            className="d-block mx-auto mb-4"
            src={mainlogo}
            alt="Purify Logo"
            width="200"
            height="72.2"
          />
        </a>
        <h2 className="mb-3">Sign up form</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-md-12 col-lg-8">
          <form
            className="needs-validation"
            noValidate=""
            onSubmit={handleSignUp}
          >
            <div className="row g-3">
              <SignupInput
                label="First name"
                id="firstName"
                type="firstName"
                placeholder=""
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("firstName", isValid)
                }
              />

              <SignupInput
                label="Last name"
                id="lastName"
                type="lastName"
                placeholder=""
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("lastName", isValid)
                }
              />

              <SignupInput
                label="Email"
                id="email"
                type="email"
                placeholder="Email address"
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("email", isValid)
                }
              />

              <SignupInput
                label="Password"
                id="password"
                type="password"
                placeholder=""
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("password", isValid)
                }
              />

              <SignupInput
                label="Address"
                id="address"
                type="text"
                placeholder="1234 Main St"
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("", isValid)
                }
              />

              <SignupInput
                label="Address 2(Optional)"
                id="address2"
                type="text"
                placeholder="Apartment or suite"
                required=""
                onValidityChange={(isValid) =>
                  handleValidityChange("", isValid)
                }
              />
            </div>

            <hr className="my-4" />

            <button
              className="w-100 btn btn-primary btn-lg"
              type="submit"
              disabled={!validity}
            >
              Continue to sign up
            </button>
          </form>
        </div>
      </div>

      <footer className="my-5 pt-2 text-body-secondary text-center text-small">
        <p className="mb-1">© 2023-2024 Purify</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#!">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#!">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#!">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
