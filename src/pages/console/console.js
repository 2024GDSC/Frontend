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

  const progresses = [10, 20, 35, 40, 80, 100];

  return (
    <div>
      <div className="d-flex flex-nowrap">
        {/* Sidebar */}
        <SideBar location="right">
          <span className="fs-4 fw-semibold ">Console</span>
          <hr></hr>
          <GoogleMapSearchBar onSearch={handleMapSearch} />
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                Edit
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                  <li>
                    <div className="form-check form-switch">
                      <ToggleSwitch
                        setMarkerAvailable={onSetMarkerAvailable}
                        isMarkerAvailable={isMarkerAvailable}
                        id={"marker"}
                      >
                        <label className="form-check-label">Add CCTV</label>
                      </ToggleSwitch>
                    </div>
                  </li>
                  <li>
                    <div className="form-check form-switch">
                      <ToggleSwitch
                        setDeleteAvailable={onSetDeleteAvailable}
                        isDeleteAvailable={isDeleteAvailable}
                        id={"delete"}
                      >
                        <label className="form-check-label">Delete CCTV</label>
                      </ToggleSwitch>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                Evaluation
              </button>

              <div className="collapse show" id="home-collapse">
                <ul>
                  {progresses.map((percentage, idx) => {
                    return (
                      <div key={idx}>
                        <ProgressBar percentage={percentage}></ProgressBar>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>

          <div className="mt-auto">
            <hr />
            <div className="d-grid gap-3">
              <button className="btn btn-primary" type="button">
                Evaluate
              </button>
              <button className="btn btn-outline-primary" type="button">
                Save
              </button>
              <button
                className="btn btn-outline-primary"
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
