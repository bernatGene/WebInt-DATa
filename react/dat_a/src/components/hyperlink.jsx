import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const HyperLink = ({ path, children }) => (
  <Link className="link" to={path}>
    {children}
  </Link>
);

HyperLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HyperLink;
