// Console.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../../UI/SideBar";
import MapWithCCTVMarker from "./Map/MapWithCCTVMarker"; // Replace with the actual name of your map component
import { Navigate } from "react-router-dom";

const rowStyle = {
  paddingLeft: "0",
  paddingRight: "0",
};
const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const Console = () => {
  const token = getToken();

  // Check if the token is present
  if (!token) {
    // Redirect to the login page or show an unauthorized message
    // You can use react-router for navigation
    alert("Please sign in to access console!");
    return <Navigate to="/" />;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <SideBar location="right" />
        {/* Main content */}
        <main className="col-md-9 col-lg-10" style={rowStyle}>
          <div className="row">
            {/* Google Map */}
            <div className="col-md-12">
              <MapWithCCTVMarker />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Console;
