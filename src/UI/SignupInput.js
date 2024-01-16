import React, { useState } from "react";

const SignupInput = ({ label, id, type, placeholder, required, feedback }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
  const isValidPassword =
    value.length >= 8 && /[!@#$%^&*()~/?;:'"-]/.test(value);
  const isValidName = value.length >= 1;

  const handleValidation = (event) => {
    setValue(event.target.value);
    setTouched(true);
  };

  const getFeedbackMessage = () => {
    if (type === "email" && touched && !isValidEmail) {
      return "Please enter a valid email address.";
    } else if (type === "password" && touched) {
      if (value.length < 8) {
        return "Password must be at least 8 characters long.";
      } else if (!/[!@#$%^&*()~/?;:'"-]/.test(value)) {
        return "Password must contain at least one of the following: !, @, # etc.";
      }
    } else if (
      (type === "firstName" || type === "lastName") &&
      touched &&
      !isValidName
    ) {
      return "Please enter a valid name.";
    }
    return "";
  };

  return (
    <div
      className={id === "lastName" || id === "firstName" ? "col-6" : "col-12"}
    >
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className={`input-group has-validation`}>
        {type === "email" ? <span className="input-group-text">@</span> : null}
        <input
          type={type}
          className={`form-control ${
            (type === "email" && touched && isValidEmail) ||
            (type === "password" && touched && isValidPassword) ||
            ((type === "firstName" || type === "lastName") &&
              touched &&
              isValidName)
              ? "is-valid"
              : (type === "email" && touched && !isValidEmail) ||
                (type === "password" && touched && !isValidPassword) ||
                ((type === "firstName" || type === "lastName") &&
                  touched &&
                  !isValidName)
              ? "is-invalid"
              : ""
          }`}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleValidation}
        />
        <div
          className={
            type === "email" || type === "password" || type === "name"
              ? "invalid-feedback"
              : "d-none"
          }
        >
          {getFeedbackMessage()}
        </div>
      </div>
    </div>
  );
};

export default SignupInput;
