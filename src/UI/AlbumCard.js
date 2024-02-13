import React from "react";
import { useNavigate } from "react-router-dom";
import "./AlbumCard.css";

const AlbumCard = ({ projectName, projectDescription, projectCreatedTime }) => {
  const navigate = useNavigate();

  const navigateToConsole = () => {
    navigate(`/console/${projectName}`);
  };
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#36D1DC", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#5B86E5", stopOpacity: 1 }}
            />
          </linearGradient>
          <rect width="100%" height="100%" fill="url(#gradient)"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {projectName}
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">{projectDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={navigateToConsole}
              >
                View
              </button>
            </div>
            <small className="text-body-secondary">
              {projectCreatedTime.substr(0, 10)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
