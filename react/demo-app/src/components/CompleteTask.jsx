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

const CompleteTask = () => {
  let match = useRouteMatch();
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const TaskNum = match.params.Tasknum
  const TaskName = (TaskList[parseInt(TaskNum, 10)-1].Task)
  const description = (TaskList[parseInt(TaskNum, 10)-1].description)
    return (
      <div>
            <div className="container"> 
          <h1>Complete Task: <span> {TaskName} </span> </h1>
          <h3> Description: </h3>
          <p> {description}</p> 

            <Button>Cat</Button>
            <Button>Dog</Button>        
          <HyperLink path="/annotator">
            <Button>Complete</Button>
          </HyperLink>
        </div>
      </div>
    )
};


export default CompleteTask;
