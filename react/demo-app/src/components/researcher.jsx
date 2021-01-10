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
    <>
      <Heading>Researcher</Heading>
      <PostQuestion
        questionValue={question}
        handleSubmit={handleQuestionSubmit}
        handleChange={handleQuestionChange}
      ></PostQuestion>
      {questionList &&
        questionList.map((questionItem, idx) => (
          <QuestionListItem key={`question-${idx}`}>{`${idx + 1} - ${
            questionItem.question
          }`}</QuestionListItem>
        ))}
    </>
  );
};

export default Researcher;
