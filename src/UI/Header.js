import NavItem from "./NavItem";

function Header({ onSignUpClick, onSignInClick }) {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span class="fs-4">Simple header</span>
        </a>
        <ul class="nav nav-pills">
          <NavItem
            href="#!"
            text="Sign up"
            onClick={onSignUpClick}
            isActive={true}
          />
          <NavItem href="#!" text="Sign in" onClick={onSignInClick} />
          <NavItem href="console" text="Console" />
          <NavItem href="#!" text="Pricing" />
          <NavItem href="#!" text="About" />
        </ul>
      </header>
    </div>
  );
}

export default Header;
