import React, { useState } from "react";
import axios from "axios";
import AlbumCard from "./AlbumCard";
import Modal from "./Modal";
import Input from "./Input";
import { API } from "../config";

const Album = ({ title, projects }) => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [formState, setFormState] = useState({
    newProjectName: "",
    description: "",
    visibility: "",
    collaborators: "",
  });
  const [validationState, setValidationState] = useState({
    touched: false,
    validity: false,
  });

  const handleCreateProjectModal = () => {
    setShowCreateProjectModal(true);
  };

  const validateField = (value) => {
    return value.trim().length >= 1 && value.trim().length <= 15;
  };

  const handleValidation = (event) => {
    const inputValue = event.target.value;
    const isValid = validateField(inputValue);
    setValidationState({
      ...validationState,
      touched: true,
      validity: isValid,
    });
  };

  console.log(formState.collaborators);

  const getFeedbackMessage = () => {
    if (validationState.touched && !validationState.validity) {
      return "Project name must be longer than 1 and less than 15";
    }
  };

  const handleSaveProject = async () => {
    const token = localStorage.getItem("token");
    if (formState.newProjectName.trim() !== "") {
      const newProject = {
        title: formState.newProjectName,
        description: formState.description,
        isOpen: formState.visibility === "2",
        sharedMemberList: formState.collaborators.split(",").map((email) => {
          return email.trim();
        }),
      };

      try {
        const response = await axios.post(`${API.CREATEPROJECT}`, newProject, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          window.location.reload();
          console.log("Project created successfully");
        } else {
          console.error("Failed to create project");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setFormState({
        ...formState,
        newProjectName: "",
        description: "",
        visibility: "",
        collaborators: "",
      });
      setShowCreateProjectModal(false);
    } else {
    }
  };

  return (
    <div className="album py-4">
      <div className="container">
        <hr />
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mb-2">
          <div className="me-lg-auto justify-content-center mb-md-0 align-items-center">
            <h2 className="justify-content-center">{title}</h2>
          </div>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-primary d-flex align-items-center justify-content-center"
              onClick={handleCreateProjectModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle me-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              Create Project
            </button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {projects.length === 0 ? (
            <p>No projects added. Please add a project to start Purify.</p>
          ) : (
            projects.map((project) => (
              <div key={project.projectId}>
                <AlbumCard
                  projectName={project.title}
                  projectDescription={project.description}
                  projectCreatedTime={project.createdTime}
                ></AlbumCard>
              </div>
            ))
          )}
        </div>
      </div>
      {showCreateProjectModal && (
        <Modal
          onClose={() => setShowCreateProjectModal(false)}
          title={"Create project"}
        >
          <form action="">
            <div className={`input-group has-validation`}>
              <Input
                type="Title"
                id="title"
                placeholder="Map 1"
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    newProjectName: e.target.value,
                  });
                  // setNewProjectName(e.target.value);
                  handleValidation(e);
                }}
                validity={validationState.validity}
                touched={validationState.touched}
              >
                <div className="invalid-feedback">{getFeedbackMessage()}</div>
              </Input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Description</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                id="description"
                value={formState.description}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    description: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="visibility">
                Visibility
              </label>
              <select
                className="form-select"
                id="visibility"
                value={formState.visibility}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    visibility: e.target.value,
                  });
                }}
              >
                <option value="">Choose...</option>
                <option value="1">Private</option>
                <option value="2">Public</option>
              </select>
            </div>
            <div className={`input-group has-validation`}>
              <Input
                type="Invite collaborators"
                id="Collaborators"
                placeholder="Invite collaborators"
                value={formState.collaborators}
                onChange={(e) => {
                  setFormState({ ...formState, collaborators: e.target.value });
                }}
              ></Input>
            </div>
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
              onClick={handleSaveProject}
              disabled={!validationState.validity}
            >
              {"Create Project"}
            </button>
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-outline-danger"
              type="submit"
              onClick={() => setShowCreateProjectModal(false)}
            >
              {"Cancel"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Album;
