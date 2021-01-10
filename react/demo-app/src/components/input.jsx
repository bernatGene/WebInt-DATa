import React from "react";
import { PropTypes } from "prop-types";

const Input = ({
  value = "",
  placeholder = "",
  name,
  handleChange,
  type = "text",
}) => (
  <div className="form-group form-primary">
    <input
      className="form-control"
      value={value}
      name={name}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
