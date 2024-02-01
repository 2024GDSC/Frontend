import React from "react";

export default function Input({
  type,
  id,
  placeholder,
  value,
  onChange,
  validity,
  children,
  touched,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control rounded-3 ${
          touched && validity
            ? "is-valid"
            : touched && !validity
            ? "is-invalid"
            : ""
        }`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{type}</label>
      {children}
    </div>
  );
}
