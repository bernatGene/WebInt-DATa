import React from "react";
import Heading from "./heading";
import TextArea from "./textarea";
import Button from "./button";
import { PropTypes } from "prop-types";

const PostQuestion = ({ questionValue = "", handleSubmit, handleChange }) => (

      //  <div className="row"> 
        <div>
          <form onSubmit={handleSubmit}>
            <Heading>Post your question</Heading>
            {/* <div className="col-sm-5"> */}
              <TextArea
                  name="question"
                  value={questionValue}
                  handleChange={handleChange}
                />
            
              <Button>Post</Button>
            {/* </div> */}
          </form>
        </div>
      // </div>
);

PostQuestion.propTypes = {
  questionValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PostQuestion;
