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

      console.log(newProjectMap);

      setProjectMaps([...projectMaps, newProjectMap]);
      setCurrentMap(newProjectMap);
      setNewProjectName("");
      setShowAddProjectModal(false);
    }
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
            <Input
              type="Title"
              id="title"
              placeholder="Map 1"
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
              onClick={handleSaveProject}
            >
              {"Create Map"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MapWithCCTVMarker;
