import React, { useState, useEffect } from "react";
import store from "store";
import {app} from "../base" ;
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

const db = app.firestore();

const Summary = () => {
  let match = useRouteMatch();
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const TaskNum = match.params.Tasknum
  const TaskName = (TaskList[parseInt(TaskNum, 10)-1].Task)
  const [images, setImages] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskLength, setTaskLength] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");
  const [exampleimage, setExampleimage] = useState(1);


  useEffect(() => {
    const unmount = db.collection("tasks")
      .doc(TaskName)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setExampleimage(0)
        setTaskName(doc.data().name);
        setTaskLength(doc.data().length);
        setTaskDescription(doc.data().description);
      });
      return unmount
  }, []);


  const description = (TaskList[parseInt(TaskNum, 10)-1].description)
  const length = (TaskList[parseInt(TaskNum, 10)-1].length)
  const [labels, setLabels] = useState(TaskList[parseInt(TaskNum, 10)-1].labels || []);
  const [completed, setCompleted] = useState(labels.length || 0);
  
    return (
      <div>
      <div className="container">
          <h1>Summary of Task: <span> {TaskName} </span> </h1>
          <h3> Description: </h3>
          <p> {taskDescription}</p> 
          <h3> Progress: </h3>
          <p> {completed} / {length} {completed  >= length ? 'Completed !' : '' } </p>
          <h4> Just to show the labels: </h4>
          <p> {labels} </p>
          <h4> Example Image: </h4>
            <aside>
              <img src={images[0] && images[0].url} alt="loading" />
            </aside>             
          <HyperLink path="/researcher">
            <Button>Back to dashboard</Button>
          </HyperLink>
        </div>
      </div>
    )
};


export default Summary;