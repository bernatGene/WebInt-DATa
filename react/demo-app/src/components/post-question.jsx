import React from "react";
import Heading from "./heading/heading";
import TextArea from "./textarea/textarea";
import Button from "./button/button";
import { PropTypes } from "prop-types";

const PostQuestion = ({ questionValue = "", handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <Heading>Post your question</Heading>
    <TextArea
      name="question"
      value={questionValue}
      handleChange={handleChange}
    />
    <Button>Post</Button>
  </form>
);

PostQuestion.propTypes = {
  questionValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PostQuestion;
