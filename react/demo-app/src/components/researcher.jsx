import React, { useState } from "react";
import PostQuestion from "./post-question";
import store from "store";
import QuestionListItem from "./question-list-item";
import Heading from "./heading";

const Researcher = () => {
  const [question, setQuestion] = useState("");
  const [questionList, setQuestionList] = useState(
    store.get("questionList") || []
  );
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleQuestionSubmit = (e) => {
    questionList.push({
      question: question,
    });
    console.log(questionList);
    setQuestionList(questionList);
    store.set("questionList", questionList);
  };

  return (
    <div className="researcher">
      <div className="container">  
        <div className="row align-items-left my-5">
          <div className="col-lg-7">
            <h1>Researcher</h1>
          </div>
          <br/>
          <div className="col-lg-7">
            <PostQuestion
              questionValue={question}
              handleSubmit={handleQuestionSubmit}
              handleChange={handleQuestionChange}
            ></PostQuestion>
            {questionList &&
              questionList.map((questionItem, idx) => (
                <QuestionListItem key={`question-${idx}`}>{`${idx + 1} - ${questionItem.question
                  }`}</QuestionListItem>
              ))}
          </div>
        </div> 
      </div> 
    </div>
    // </div>
  );
};

export default Researcher;
