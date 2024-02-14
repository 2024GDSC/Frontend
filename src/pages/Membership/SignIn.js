import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import axios from "axios";
import { API } from "../../config";

export default function SignIn({ onClose, onSignUpClick, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be sent
    const data = {
      email: email,
      password: password,
    };

    try {
      // Make the API request using axios
      const response = await axios.post(`${API.SIGNIN}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.accessToken);
        onSuccess(email);
      } else {
        // Handle the error response, e.g., display an error message
        console.error("Sign in failed");
      }
    } catch (error) {
      console.error("Error occurred during sign in:", error);
    }
  };

  return (
    <Modal onClose={onClose} title="Sign in">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
          type="submit"
        >
          {"Sign in"}
        </button>
        <button
          className="w-100 mb-2 btn btn-lg rounded-3 btn-outline-primary"
          type="button"
          onClick={onSignUpClick}
        >
          {"Sign up"}
        </button>
      </form>
    </Modal>
  );
}
