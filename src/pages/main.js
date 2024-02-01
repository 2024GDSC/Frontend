import AlignedJumbotron from "../UI/AlignedJumbotron";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import Header from "../UI/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import Footer from "../UI/Footer";
import Input from "../UI/Input";
import Album from "../UI/Album";

export default function Main() {
  const [isSignInVisible, setSignInVisibility] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };

  const handleSignUpClick = () => {
    setSignInVisibility(false); // Close the sign-in modal
    navigate("/signup"); // Navigate to the signup page
  };
  return (
    <div className="container py-4">
      <Header onSignInClick={handleSignInClick}></Header>
      <ClassicJumbotron></ClassicJumbotron>
      <AlignedJumbotron></AlignedJumbotron>
      <Album title={"Projects"}></Album>
      <Footer></Footer>

      {isSignInVisible && (
        <Modal onClose={() => setSignInVisibility(false)} title="Sign in">
          <form>
            <Input
              type="Email address"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <Input
              type="Password"
              id="floatingPassword"
              placeholder="Password"
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
              onClick={handleSignUpClick}
            >
              {"Sign up"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
