import React from "react";
import "./SideBar.css";

const Sidebar = ({ location, children }) => {
  return (
    <div
      id="sidebar"
      className={`d-flex flex-column flex-shirink-0 p-3 bg-body-tertiary ${
        location === "right" ? "order-last" : ""
      }`}
      style={{ width: `${location === "left" ? "240px" : "400px"}` }}
    >
      {children}
    </div>
  );
};

export default Sidebar;
