import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import cctvImage from "../../../Assets/images/CCTVMarkerIcon.png";
import Modal from "../../../UI/Modal";
import sample from "../../../Assets/video/sampleVideo.mp4";

const libraries = ["places"];
const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export default function Map({
  isMarkerAvailable,
  query,
  isDeleteAvailable,
  isReset,
  setReset,
}) {
  const [initialCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  const [markers, setMarkers] = useState([]);
  const isMarkerAvailableRef = useRef(isMarkerAvailable);
  const isDeleteAvailableRef = useRef(isDeleteAvailable);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  useEffect(() => {
    isMarkerAvailableRef.current = isMarkerAvailable;
  }, [isMarkerAvailable]);

  useEffect(() => {
    isDeleteAvailableRef.current = isDeleteAvailable;
  }, [isDeleteAvailable]);

  useEffect(() => {
    if (isReset) {
      setMarkers([]);
      setReset(false);
    }
  }, [isReset, setReset]);

  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
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
      }
    });
  };

  const onDeleteMarker = (markerId) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
    setMarkers(updatedMarkers);
  };

  const onCheckMarker = (markerId) => {
    console.log(markerId);
    setModalTitle(markerId);
    setVideoModalOpen(true);
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
            isDeleteAvailableRef.current
              ? onDeleteMarker(marker.id)
              : onCheckMarker(marker.id)
          }
        />
      ))}

      {isVideoModalOpen && (
        // Render your modal component here, passing modalContent as props
        <Modal
          title={modalTitle}
          onClose={() => {
            setVideoModalOpen(false);
            setModalTitle(null);
          }}
        >
          <video
            class="object-fit-cover"
            width="400"
            height="250"
            controls
            autoPlay
            loop
          >
            <source src={sample}></source>
          </video>
        </Modal>
      )}
    </GoogleMap>
  );
}
