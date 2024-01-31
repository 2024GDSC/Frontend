// Console.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../../UI/SideBar";
import MapWithCCTVMarker from "./Map/MapWithCCTVMarker"; // Replace with the actual name of your map component
import ToggleSwitch from "../../UI/ToggleSwitch";
import GoogleMapSearchBar from "./Map/GoogleMapSearchBar";
import ProgressBar from "../../UI/ProgressBar";

const rowStyle = {
  paddingLeft: "0",
  paddingRight: "0",
};
// const getToken = () => {
//   return localStorage.getItem("jwtToken");
// };

const Console = () => {
  // const token = getToken();

  // // Check if the token is present
  // if (!token) {
  //   // Redirect to the login page or show an unauthorized message
  //   // You can use react-router for navigation
  //   alert("Please sign in to access console!");
  //   return <Navigate to="/" />;
  // }

  const [isMarkerAvailable, setIsMarkerAvailable] = useState(false);
  const [isDeleteAvailable, setIsDeleteAvailable] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onSetMarkerAvailable = () => {
    if (isMarkerAvailable) {
      setIsMarkerAvailable(false);
    } else {
      if (isDeleteAvailable) {
        setIsDeleteAvailable(false);
      }
      setIsMarkerAvailable(true);
    }
  };

  const onSetDeleteAvailable = () => {
    if (isDeleteAvailable) {
      setIsDeleteAvailable(false);
    } else {
      if (isMarkerAvailable) {
        setIsMarkerAvailable(false);
      }
      setIsDeleteAvailable(true);
    }
  };

  const onSetReset = () => {
    setIsReset(true);
  };

  const handleMapSearch = (query) => {
    setSearchQuery(query); // Update the search query state
    // You can use this information to update the map with the searched location
  };
  return (
    <div>
      <div className="d-flex flex-nowrap">
        {/* Sidebar */}
        <SideBar location="right">
          <span class="fs-4 fw-semibold ">Console</span>
          <hr></hr>
          <GoogleMapSearchBar onSearch={handleMapSearch} />
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                Edit
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
                  <li>
                    <div class="form-check form-switch">
                      <ToggleSwitch
                        setMarkerAvailable={onSetMarkerAvailable}
                        isMarkerAvailable={isMarkerAvailable}
                        id={"marker"}
                      >
                        <label class="form-check-label">Add CCTV</label>
                      </ToggleSwitch>
                    </div>
                  </li>
                  <li>
                    <div class="form-check form-switch">
                      <ToggleSwitch
                        setDeleteAvailable={onSetDeleteAvailable}
                        isDeleteAvailable={isDeleteAvailable}
                        id={"delete"}
                      >
                        <label class="form-check-label">Delete CCTV</label>
                      </ToggleSwitch>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                Evaluation
              </button>

              <div class="collapse show" id="home-collapse">
                <ul>
                  <ProgressBar percentage={0}></ProgressBar>
                  <ProgressBar percentage={10}></ProgressBar>
                  <ProgressBar percentage={40}></ProgressBar>
                  <ProgressBar percentage={50}></ProgressBar>
                  <ProgressBar percentage={100}></ProgressBar>
                </ul>
              </div>
            </li>
          </ul>

          <div className="mt-auto">
            <hr />
            <div class="d-grid gap-3">
              <button class="btn btn-primary" type="button">
                Evaluate
              </button>
              <button class="btn btn-outline-primary" type="button">
                Save
              </button>
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={onSetReset}
              >
                Reset
              </button>
            </div>
          </div>
        </SideBar>

        {/* Main content */}
        <main className="col-md-9 col-lg-10" style={rowStyle}>
          <div className="row">
            {/* Google Map */}
            <div className="col-md-12">
              <MapWithCCTVMarker
                isMarkerAvailable={isMarkerAvailable}
                isDeleteAvailable={isDeleteAvailable}
                isReset={isReset}
                setReset={setIsReset}
                query={searchQuery}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Console;
