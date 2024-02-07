import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import cctvImage from "../../../Assets/images/CCTVMarkerIcon.png";

const libraries = ["places"];

export default function Map({
  isMarkerAvailable,
  query,
  isDeleteAvailable,
  isReset,
  setReset,
}) {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  // Use a state for the initial center, and don't change it after the initial render
  const [initialCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const isMarkerAvailableRef = useRef(isMarkerAvailable);
  const isDeleteAvailableRef = useRef(isDeleteAvailable);

  useEffect(() => {
    isMarkerAvailableRef.current = isMarkerAvailable;
  }, [isMarkerAvailable]);

  useEffect(() => {
    isDeleteAvailableRef.current = isDeleteAvailable;
  }, [isDeleteAvailable]);

  useEffect(() => {
    // Reset markers when isReset changes
    if (isReset) {
      setMarkers([]);
      // Reset isReset to false after clearing markers
      setReset(false);
    }
  }, [isReset, setReset]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDlnLYN1Qavcbft65V58_ifdkWD5ATapd4",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

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
      } else {
        // Check if the click was on a marker
        const clickedMarker = markers.find((marker) => {
          const markerPosition = marker.position;
          return (
            Math.abs(markerPosition.lat - clickedPosition.lat) < 0.0001 &&
            Math.abs(markerPosition.lng - clickedPosition.lng) < 0.0001
          );
        });

        if (clickedMarker) {
          // Show info window for the clicked marker
          setSelectedMarker(clickedMarker);
        }
      }
    });
  };

  const onDeleteMarker = (markerId) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
    setMarkers(updatedMarkers);
    // Close info window when marker is deleted
    setSelectedMarker(null);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={initialCenter} // Use initialCenter as the constant center
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
          onClick={() =>
            isDeleteAvailableRef.current ? onDeleteMarker(marker.id) : null
          }
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            {/* Content for the info window */}
            <p>Marker ID: {selectedMarker.id}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
