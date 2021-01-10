import React from "react";
import { PropTypes } from "prop-types";
import "./question-list-item.css";

const QuestionListItem = ({ children }) => (
  <li class="alert alert-primary">{children}</li>
);

QuestionListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionListItem;
