import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import store from "store";
import QuestionListItem from "./question-list-item";



const Annotator = () => {
  let match = useRouteMatch();
  const [questionList, setQuestionList] = useState(
    store.get("questionList") || []
  );
  return (
    <div>
    	<h3>Annotator role:</h3>
      <p> Here you would browse tasks and select one </p>
      {questionList &&
              questionList.map((questionItem, idx) => (
                <QuestionListItem key={`question-${idx}`}>{`${idx + 1} - ${questionItem.question
                  }`}</QuestionListItem>
              ))}
    </div>


            
  );
}
export default Annotator;
