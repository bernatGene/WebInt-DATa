import React from "react";
import PropTypes from "prop-types";

const AuthFormBox = ({ handleSubmit, children }) => (
  <form className="md-float-material form-material" onSubmit={handleSubmit}>
    <div className="auth-box card">
      <div className="card-block">{children}</div>
    </div>
  </form>
);

AuthFormBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthFormBox;
