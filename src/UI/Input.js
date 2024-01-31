import React from "react";

export default function Input({ type, id, placeholder, value, onChange }) {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        class="form-control rounded-3"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label for={id}>{type}</label>
    </div>
  );
}
