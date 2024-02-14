import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../Assets/images/logo.png";
import SignupInput from "../../UI/SignupInput";
import axios from "axios";
import { API } from "../../config";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validity =
    firstNameValid && lastNameValid && emailValid && passwordValid;

  const navigate = useNavigate();

  const handleValidityChange = (field, isValid, validValue) => {
    switch (field) {
      case "firstName":
        setFirstNameValid(isValid);
        setFirstName(validValue); // Set the valid value in state
        break;
      case "lastName":
        setLastNameValid(isValid);
        setLastName(validValue); // Set the valid value in state
        break;
      case "email":
        setEmailValid(isValid);
        setEmail(validValue); // Set the valid value in state
        break;
      case "password":
        setPasswordValid(isValid);
        setPassword(validValue); // Set the valid value in state
        break;
      // Handle other fields similarly
      default:
        break;
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (validity) {
      try {
        const response = await axios.post(`${API.SIGNUP}`, {
          email,
          name: `${firstName} ${lastName}`,
          password,
          role: "SIMULATOR",
        });

        console.log("Signup successful:", response.data);
        navigate("/"); // Replace "/" with the actual path of your main page
      } catch (error) {
        console.error("Signup failed:", error);
        // Handle error (show a message to the user, etc.)
      }
    }
  };

  return (
    <div className="container">
      <div className="py-4 text-center ">
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
                onValidityChange={(isValid, validValue) =>
                  handleValidityChange("firstName", isValid, validValue)
                }
              />

              <SignupInput
                label="Last name"
                id="lastName"
                type="lastName"
                placeholder=""
                required=""
                onValidityChange={(isValid, validValue) =>
                  handleValidityChange("lastName", isValid, validValue)
                }
              />

              <SignupInput
                label="Email"
                id="email"
                type="email"
                placeholder="Email address"
                required=""
                onValidityChange={(isValid, validValue) =>
                  handleValidityChange("email", isValid, validValue)
                }
              />

              <SignupInput
                label="Password"
                id="password"
                type="password"
                placeholder=""
                required=""
                onValidityChange={(isValid, validValue) =>
                  handleValidityChange("password", isValid, validValue)
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
