import NavItem from "./NavItem";
import mainlogo from "../Assets/images/logo.png";
import Wrapper from "./Wrapper";

function Header({ onSignInClick, signedIn, setSignedIn }) {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setSignedIn(false);
    window.location.reload();
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
          <NavItem href="console" text="Console" />
          <NavItem href="#!" text="About" />
          {signedIn ? (
            <NavItem
              href="#!"
              text="Sign out"
              isActive={true}
              onClick={handleSignOut}
            />
          ) : (
            <Wrapper>
              <NavItem href="#!" text="Sign in" onClick={onSignInClick} />
              <NavItem href="signup" text="Sign up" isActive={true} />
            </Wrapper>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
