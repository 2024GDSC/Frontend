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
    <div className="form-check form-switch" onClick={toggleHandler}>
      {children}
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={isMarkerAvailable ? isMarkerAvailable : isDeleteAvailable}
        readOnly={true}
      />
    </div>
  );
}
