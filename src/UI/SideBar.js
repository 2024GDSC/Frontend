import React from "react";
import "./SideBar.css";

const Sidebar = ({ onDropCCTV }) => {
  return (
    <nav
      id="sidebar"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar order-last"
    >
      <div className="position-sticky">
        <div></div>
      </div>
    </nav>
  );
};

export default Sidebar;
