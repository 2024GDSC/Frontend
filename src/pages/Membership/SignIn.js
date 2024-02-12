import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import axios from "axios";

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
      const response = await axios.post(
        "http://34.47.72.96:9001/member/signin",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the request was successful (status code 200-299)
      if (response.status === 200) {
        // Handle the successful response, e.g., redirect or set user authentication state
        console.log("Sign in successful");
        // Invoke the onSuccess callback
        onSuccess();
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
