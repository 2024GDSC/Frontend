import React, { useState } from "react";

const SignupInput = ({
  label,
  id,
  type,
  placeholder,
  required,
  onValidityChange,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
  const isValidPassword =
    value.length >= 8 && /[!@#$%^&*()~/?;:'"-]/.test(value);
  const isValidFirstName = value.length >= 1;
  const isValidLastName = value.length >= 1;

  const handleValidation = (event) => {
    setValue(event.target.value);
    setTouched(true);

    // Update the parent component about the validity change and pass the valid value
    const isValid = validateField(type, event.target.value);
    onValidityChange(isValid, isValid ? event.target.value : "");
  };

  const validateField = (fieldType, value) => {
    switch (fieldType) {
      case "email":
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
      case "password":
        return value.length >= 8 && /[!@#$%^&*()~/?;:'"-]/.test(value);
      case "firstName":
        return value.length >= 1;
      case "lastName":
        return value.length >= 1;
      // Add other cases for different field types as needed
      default:
        return true; // Default to true if no specific validation is needed
    }
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
    } else if (type === "firstName" && touched && !isValidFirstName) {
      return "Please enter a valid first name.";
    } else if (type === "lastName" && touched && !isValidLastName) {
      return "Please enter a valid last name.";
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
            (type === "firstName" && touched && isValidFirstName) ||
            (type === "lastName" && touched && isValidLastName)
              ? "is-valid"
              : (type === "email" && touched && !isValidEmail) ||
                (type === "password" && touched && !isValidPassword) ||
                (type === "firstName" && touched && !isValidFirstName) ||
                (type === "lastName" && touched && !isValidLastName)
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
