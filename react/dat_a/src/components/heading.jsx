import React from "react";
import { PropTypes } from "prop-types";

const Heading = ({ children }) => (
  <h1 className="font-weight-light">{children}</h1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
