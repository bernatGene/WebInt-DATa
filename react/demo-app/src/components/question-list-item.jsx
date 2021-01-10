import React from "react";
import { PropTypes } from "prop-types";

const QuestionListItem = ({ children }) => (
  <li class="alert alert-primary">{children}</li>
);

QuestionListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionListItem;
