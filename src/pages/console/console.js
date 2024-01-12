// Console.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../../UI/SideBar";
import MapWithCCTVMarker from "./Map/MapWithCCTVMarker";

const rowStyle = {
  paddingLeft: "0",
  paddingRight: "0",
};

const Console = () => {
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
