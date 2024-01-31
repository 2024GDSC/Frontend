import React from "react";

export default function ToggleSwitch({
  children,
  setMarkerAvailable,
  isMarkerAvailable,
  setDeleteAvailable,
  isDeleteAvailable,
  id,
}) {
  const toggleHandler = () => {
    if (id === "marker") {
      setMarkerAvailable();
    } else {
      setDeleteAvailable();
    }
  };
  return (
    <div class="form-check form-switch" onClick={toggleHandler}>
      {children}
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        checked={isMarkerAvailable ? isMarkerAvailable : isDeleteAvailable}
      />
    </div>
  );
}
