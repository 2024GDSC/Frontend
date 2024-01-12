import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "../../../UI/SideBar";
import ToggleSwitch from "../../../UI/ToggleSwitch";

const MapWithCCTVMarker = () => {
  const [isMarkerAvailable, setIsMarkerAvailable] = useState(false);

  const onSetMarkerAvailable = () => {
    if (isMarkerAvailable) {
      setIsMarkerAvailable(false);
    } else {
      setIsMarkerAvailable(true);
    }
  };

  // console.log(isMarkerAvailable);

  return (
    <div className="d-flex">
      <Sidebar location="left">
        <h4>Console</h4>
        <ToggleSwitch setMarkerAvailable={onSetMarkerAvailable}>
          <label>CCTV</label>
        </ToggleSwitch>
      </Sidebar>

      {/* Google Map */}
      <div className="flex-grow-1">
        <Map isMarkerAvailable={isMarkerAvailable} />
      </div>
    </div>
  );
};

export default MapWithCCTVMarker;
