// Console.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Console.css"; // You can create a CSS file for additional styling
import SideBar from "../../UI/SideBar";
import MapWithCCTVMarker from "./Map/MapWithCCTVMarker"; // Replace with the actual name of your map component

const rowStyle = {
  paddingLeft: "0",
  paddingRight: "0",
};

const Console = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <SideBar />

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
