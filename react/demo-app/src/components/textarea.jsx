import React from "react";
import { PropTypes } from "prop-types";

const TextArea = ({ value = "", desvalue = "", label = "", name, handleChange }) => (
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Task name"
      id="floatingTextarea"
      value={value}
      name={name}
      onChange={handleChange}
    ></textarea>
    <textarea
      class="form-control"
      placeholder="Task name"
      id="floatingTextarea"
      value={desvalue}
      name={name}
      onChange={handleChange}
    ></textarea>
    <label htmlFor="floatingTextarea">{label}</label>
{/*    <textarea
      class="form-control"
      placeholder="Desription"
      id="floatingTextarea2"
      value={value}
      name={name}
      onChange={handleChange}
    ></textarea>
    <label htmlFor="floatingTextarea2">{label}</label>*/}

  </div>
);

TextArea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
