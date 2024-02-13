import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "../../../UI/SideBar";
import mainlogo from "../../../Assets/images/logo.png";
import ProjectMap from "./ProjectMap";
import Modal from "../../../UI/Modal";
import Input from "../../../UI/Input";

const MapWithCCTVMarker = ({
  isMarkerAvailable,
  query,
  isDeleteAvailable,
  isReset,
  setReset,
}) => {
  const [projectMaps, setProjectMaps] = useState([]);

  const [currentMap, setCurrentMap] = useState(projectMaps[0]);
  const [newProjectName, setNewProjectName] = useState("");
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [touched, setTouched] = useState(false);
  const [validity, setValidity] = useState(false);

  const handleValidation = (event) => {
    const inputValue = event.target.value;
    setTouched(true);

    // Update the parent component about the validity change
    const isValid = validateField(inputValue);
    setValidity(isValid);
  };

  const getFeedbackMessage = () => {
    if (touched && !validity) {
      return "Title must be longer than 1";
    }
  };

  const validateField = (value) => {
    return value.trim().length >= 1; // Ensure that we trim the value before checking its length
  };

  const handleMapClick = (map) => {
    setCurrentMap(map);
  };

  const handleAddProject = () => {
    setShowAddProjectModal(true);
  };

  const handleSaveProject = () => {
    if (newProjectName.trim() !== "") {
      const newProjectMap = {
        title: newProjectName,
        id: projectMaps.length + 1,
      };

      setProjectMaps([...projectMaps, newProjectMap]);
      setCurrentMap(newProjectMap);
      setNewProjectName("");
      setShowAddProjectModal(false);
    } else {
    }
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjectMaps = projectMaps.filter(
      (map) => map.id !== projectId
    );
    setProjectMaps(updatedProjectMaps);
  };

  return (
    <div className="d-flex">
      <Sidebar location="left">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={mainlogo}
            alt="Purify Logo"
            style={{ width: "108px", height: "39.042px" }}
          />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {projectMaps.map((map) => (
            <ProjectMap
              key={map.id}
              title={map.title}
              current={map.id === currentMap.id}
              onClick={() => handleMapClick(map)}
              onDelete={() => handleDeleteProject(map.id)}
            />
          ))}

          <li>
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-outline-secondary mt-1"
                onClick={handleAddProject}
              >
                Create map
              </button>
            </div>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#!"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Hyunseo</strong>
          </a>
        </div>
      </Sidebar>

      {/* Google Map */}
      <div className="flex-grow-1">
        <Map
          isMarkerAvailable={isMarkerAvailable}
          query={query}
          isDeleteAvailable={isDeleteAvailable}
          isReset={isReset}
          setReset={setReset}
        />
      </div>
      {showAddProjectModal && (
        <Modal
          onClose={() => setShowAddProjectModal(false)}
          title={"Set map title"}
        >
          <form action="">
            <div className={`input-group has-validation`}>
              <Input
                type="Title"
                id="title"
                placeholder="Map 1"
                onChange={(e) => {
                  setNewProjectName(e.target.value);
                  handleValidation(e); // Pass the event object to handleValidation
                }}
                validity={validity}
                touched={touched}
              >
                <div className="invalid-feedback">{getFeedbackMessage()}</div>
              </Input>
            </div>
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
              onClick={handleSaveProject}
              disabled={!validity}
            >
              {"Create Map"}
            </button>
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-outline-danger"
              type="submit"
              onClick={() => setShowAddProjectModal(false)}
            >
              {"Cancel"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MapWithCCTVMarker;
