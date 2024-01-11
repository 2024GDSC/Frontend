import AlignedJumbotron from "../UI/AlignedJumbotron";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import Header from "../UI/Header";
import { useState } from "react";
import Modal from "../UI/Modal";

export default function Main() {
  const [isSignUpVisible, setSignUpVisibility] = useState(false);
  const [isSignInVisible, setSignInVisibility] = useState(false);

  const handleSignUpClick = () => {
    setSignUpVisibility(true);
  };

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };
  return (
    <div class="container py-4">
      <Header
        onSignUpClick={handleSignUpClick}
        onSignInClick={handleSignInClick}
      ></Header>
      <ClassicJumbotron></ClassicJumbotron>
      <AlignedJumbotron></AlignedJumbotron>
      {isSignUpVisible && (
        <Modal onClose={() => setSignUpVisibility(false)} title="Sign up" />
      )}
      {isSignInVisible && (
        <Modal onClose={() => setSignInVisibility(false)} title="Sign in" />
      )}
    </div>
  );
}
