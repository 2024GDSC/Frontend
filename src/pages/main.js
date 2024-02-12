// Main.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../UI/Header";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import AlignedJumbotron from "../UI/AlignedJumbotron";
import Album from "../UI/Album";
import Footer from "../UI/Footer";
import SignIn from "./Membership/SignIn";

export default function Main() {
  const [isSignInVisible, setSignInVisibility] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false); // Add state for sign-in status
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };

  const handleSignUpClick = () => {
    setSignInVisibility(false);
    navigate("/signup");
  };

  const handleSignInSuccess = () => {
    setSignedIn(true);
  };

  const renderAlbum = isSignedIn ? <Album title={"Projects"}></Album> : null;

  return (
    <div className="container py-4">
      <Header onSignInClick={handleSignInClick}></Header>
      <ClassicJumbotron></ClassicJumbotron>
      <AlignedJumbotron></AlignedJumbotron>
      {renderAlbum}
      <Footer></Footer>

      {isSignInVisible && (
        <SignIn
          onClose={() => setSignInVisibility(false)}
          onSignUpClick={handleSignUpClick}
          onSuccess={handleSignInSuccess} // Pass the callback function
        />
      )}
    </div>
  );
}
