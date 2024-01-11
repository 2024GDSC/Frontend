import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Import your custom marker icon image
import cctvImage from "../../../Assets/CCTVMarkerIcon.png";

export default function Map({ onDrop, cctvMarkers, onMarkerDrag }) {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [markers, setMarkers] = useState(cctvMarkers);

  const onLoad = (map) => {
    console.log("Map loaded:", map);

    map.addListener("click", (e) => {
      const clickedPosition = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };

      const newMarker = {
        id: new Date().getTime(),
        position: clickedPosition,
        // You can add any other properties you need for customization here
      };

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    });
  };

  const onError = (status) => {
    console.error("Error loading Google Map. Status:", status);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDlnLYN1Qavcbft65V58_ifdkWD5ATapd4"
      onError={onError}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            draggable={true}
            // Customize the marker icon
            icon={{
              url: cctvImage,
              scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
