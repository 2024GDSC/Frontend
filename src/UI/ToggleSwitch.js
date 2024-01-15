import React, { useState } from "react";

export default function ToggleSwitch({ children, setMarkerAvailable }) {
  const toggleHandler = () => {
    setMarkerAvailable();
  };
  return (
    <div class="form-check form-switch" onClick={toggleHandler}>
      {children}
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
      />
    </div>
  );
}
