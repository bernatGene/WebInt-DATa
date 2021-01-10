import React from "react";
import { PropTypes } from "prop-types";

const Button = ({ children }) => (
  <button className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
