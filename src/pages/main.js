// Main.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../config";
import Header from "../UI/Header";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import AlignedJumbotron from "../UI/AlignedJumbotron";
import Album from "../UI/Album";
import Footer from "../UI/Footer";
import SignIn from "./Membership/SignIn";

export default function Main() {
  const [isSignInVisible, setSignInVisibility] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false); // Add state for sign-in status
  const [userEmail, setUserEmail] = useState("");
  const [projects, setProjects] = useState([]);

  console.log("project", projects);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedToken && storedEmail) {
      setSignedIn(true);
      setUserEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      fetchProjects();
      localStorage.setItem("userEmail", userEmail);
    }
  }, [isSignedIn, userEmail]);

  const fetchProjects = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${API.FETCHPROJECT}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleSignInSuccess = async (email) => {
    setUserEmail(email);
    setSignInVisibility(false);
    setSignedIn(true);
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };

  const handleSignUpClick = () => {
    setSignInVisibility(false);
    navigate("/signup");
  };

  const renderAlbum = isSignedIn ? (
    <Album title={"My Projects"} projects={projects} />
  ) : null;

  return (
    <div className="container py-4">
      <Header
        onSignInClick={handleSignInClick}
        signedIn={isSignedIn}
        setSignedIn={setSignedIn}
      ></Header>
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
