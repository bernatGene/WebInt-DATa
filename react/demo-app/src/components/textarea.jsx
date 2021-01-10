import React from "react";
import { PropTypes } from "prop-types";
import "./textarea.css";

const TextArea = ({ value = "", label = "", name, handleChange }) => (
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Leave a question here"
      id="floatingTextarea"
      value={value}
      name={name}
      onChange={handleChange}
    ></textarea>
    <label htmlFor="floatingTextarea">{label}</label>
  </div>
);

TextArea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
