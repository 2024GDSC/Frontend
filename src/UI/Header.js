import React from "react";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import mainlogo from "../Assets/images/logo.png";
import Wrapper from "./Wrapper";

function Header({ onSignInClick, signedIn, setSignedIn }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setSignedIn(false);
    navigate("/");
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={mainlogo}
            alt="Purify Logo"
            style={{ width: "120px", height: "43.32px" }}
          />
        </a>

        <ul className="nav nav-pills">
          {signedIn ? (
            <Wrapper>
              <NavItem href="console" text="Console" />
              <NavItem href={"dashboard"} text={"Dashboard"} />
              <NavItem href="#!" text="About Us" />
              <NavItem
                href="/"
                text="Sign out"
                isActive={true}
                onClick={handleSignOut}
              />
            </Wrapper>
          ) : (
            <Wrapper>
              <NavItem href="signup" text="Sign up" isActive={true} />
              <NavItem href="#!" text="Sign in" onClick={onSignInClick} />
              <NavItem href="console" text="Console" />
              <NavItem href="#!" text="About Us" />
            </Wrapper>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
