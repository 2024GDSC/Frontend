import React from "react";

export default function Input({ type, id, placeholder, value, onChange }) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control rounded-3"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{type}</label>
    </div>
  );
}
