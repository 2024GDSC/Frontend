import React from "react";
import mainlogo from "../../Assets/images/logo.png";

export default function DashboardTitle() {
  return (
    <div className="container border-bottom">
      <div className="d-flex justify-content-between flex-wrap py-2 mb-2">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 ">
          <img
            src={mainlogo}
            alt="Purify Logo"
            style={{ width: "120px", height: "43.32px" }}
          />
        </a>
        <h1 className="h2">Dashboard</h1>
        <div className="">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
