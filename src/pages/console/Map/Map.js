import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import cctvImage from "../../../Assets/images/CCTVMarkerIcon.png";

export default function Map({ isMarkerAvailable }) {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [markers, setMarkers] = useState([]);
  const isMarkerAvailableRef = useRef(isMarkerAvailable);

  useEffect(() => {
    isMarkerAvailableRef.current = isMarkerAvailable;
  }, [isMarkerAvailable]);

  const onLoad = (map) => {
    // Check if marker addition is allowed
    map.addListener("click", (e) => {
      const clickedPosition = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      if (isMarkerAvailableRef.current) {
        const newMarker = {
          id: new Date().getTime(),
          position: clickedPosition,
        };
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      }
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
            icon={{
              url: cctvImage,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
