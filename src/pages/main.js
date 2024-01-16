import AlignedJumbotron from "../UI/AlignedJumbotron";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import Header from "../UI/Header";
import { useState } from "react";
import Modal from "../UI/Modal";

export default function Main() {
  const [isSignInVisible, setSignInVisibility] = useState(false);

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };
  return (
    <div class="container py-4">
      <Header onSignInClick={handleSignInClick}></Header>
      <ClassicJumbotron></ClassicJumbotron>
      <AlignedJumbotron></AlignedJumbotron>

      {isSignInVisible && (
        <Modal onClose={() => setSignInVisibility(false)} title="Sign in" />
      )}
    </div>
  );
}
