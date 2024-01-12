import React from "react";

export default function Input({ type, id, placeholder }) {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        class="form-control rounded-3"
        id={id}
        placeholder={placeholder}
      />
      <label for={id}>{type}</label>
    </div>
  );
}
