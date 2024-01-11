import React, { useState } from "react";
import Map from "./Map";

const MapWithCCTVMarker = () => {
  const [cctvMarkers, setCCTVMarkers] = useState([]);

  const handleMapClick = (position) => {
    const newMarkers = [...cctvMarkers, { id: new Date().getTime(), position }];
    setCCTVMarkers(newMarkers);
  };

  return (
    <div className="d-flex">
      <div
        className="p-3"
        style={{ backgroundColor: "#f8f9fa", minWidth: "200px" }}
      >
        <h4>Console</h4>
        {/* You can add other components or controls here if needed */}
      </div>

      {/* Google Map */}
      <div className="flex-grow-1">
        <Map onDrop={handleMapClick} cctvMarkers={cctvMarkers} />
      </div>
    </div>
  );
};

export default MapWithCCTVMarker;
