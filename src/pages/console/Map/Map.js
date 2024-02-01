import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import cctvImage from "../../../Assets/images/CCTVMarkerIcon.png";

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

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [markers, setMarkers] = useState([]);
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

  console.log("marker: ", isMarkerAvailableRef.current);
  console.log("delete: ", isDeleteAvailableRef.current);

  // useEffect(() => {
  //   // Fetch location details based on the query using Google Places API
  //   if (query) {
  //     // Use your API key for the Places API
  //     const placesApiKey = "";
  //     const placesApiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=geometry&key=${placesApiKey}`;

  //     fetch(placesApiUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const location = data.candidates[0]?.geometry?.location;
  //         if (location) {
  //           const newMarker = {
  //             id: new Date().getTime(),
  //             position: {
  //               lat: location.lat,
  //               lng: location.lng,
  //             },
  //           };
  //           setMarkers([newMarker]);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching location details:", error);
  //       });
  //   }
  // }, [query]);

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
          onDeleteMarker(clickedMarker.id);
        }
      }
    });
  };

  const onDeleteMarker = (markerId) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
    setMarkers(updatedMarkers);
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
            onClick={() =>
              isDeleteAvailableRef.current ? onDeleteMarker(marker.id) : null
            }
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
