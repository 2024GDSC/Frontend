import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <li
      className="list-unstyled"
      style={{ marginRight: "1.25rem", marginBottom: "0.5rem" }}
    >
      <p style={{ marginBottom: "0.3rem" }}>Security</p>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </li>
  );
};

export default ProgressBar;
