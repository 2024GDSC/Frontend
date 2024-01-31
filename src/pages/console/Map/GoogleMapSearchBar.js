// GoogleMapSearchBar.js

import React, { useState } from "react";

const GoogleMapSearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Call the onSearch prop with the searchQuery
    onSearch(searchQuery);
  };

  return (
    <div className="mb-3 input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search locations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default GoogleMapSearchBar;
