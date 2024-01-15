import React from "react";
import "./SideBar.css";

const Sidebar = ({ location, children }) => {
  return (
    <nav
      id="sidebar"
      className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${
        location === "right" ? "order-last" : ""
      }`}
    >
      <div className="position-sticky">{children}</div>
    </nav>
  );
};

export default Sidebar;
