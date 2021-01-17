import React, { useState } from "react";
import store from "store";
import Heading from "./heading";
import TextArea from "./textarea";
import Button from "./button";
import { PropTypes } from "prop-types";
import HyperLink from "./hyperlink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Summary = () => {
  let match = useRouteMatch();
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const TaskNum = match.params.Tasknum
  const TaskName = (TaskList[parseInt(TaskNum, 10)-1].Task)
  const description = (TaskList[parseInt(TaskNum, 10)-1].description)
  const length = (TaskList[parseInt(TaskNum, 10)-1].length)
  const [labels, setLabels] = useState(TaskList[parseInt(TaskNum, 10)-1].labels || []);
  const [completed, setCompleted] = useState(labels.length || 0);
  
    return (
      <div>
      <div className="container">
          <h1>Summary of Task: <span> {TaskName} </span> </h1>
          <h3> Description: </h3>
          <p> {description}</p> 
          <h3> Progress: </h3>
          <p> {completed} / {length} </p>
          <h4> Just to show the labels: </h4>
          <p> {labels} </p>
          <HyperLink path="/researcher">
            <Button>Back to dashboard</Button>
          </HyperLink>
        </div>
      </div>
    )
};


export default Summary;
