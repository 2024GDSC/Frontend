import React from "react";

const NavItem = ({ href, text, onClick, isActive }) => {
  return (
    <li className="nav-item">
      <a
        href={href}
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
