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
import { useHistory } from "react-router-dom";

const db = app.firestore();

const CompleteTask = () => {
  const history = useHistory();
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
  


  const  handleClick = (e) => {
    
    labels.push(e)
    setLabels(labels)
    setCompleted(completed + 1)
    
    if (completed >= length - 1) {
      handleCompletion();
    };
  };

  const handleCompletion = () => {
    TaskList[parseInt(TaskNum, 10)-1] = {
      Task: TaskName,
      description: description,
      length: length,
      labels: labels
    };
    store.set("TaskList", TaskList);
    history.push("/annotator");
  };

    return (
      <div>
            <div className="container"> 
          <h1>Complete Task: <span> {TaskName} </span> </h1>
          <h3> Description: </h3>
          <p> {description}</p> 
          <div className="image-container">
            <h1>Place Holder for image: {completed}</h1>
            <aside>
              <img src={images[completed] && images[completed].url} alt="loading"  width="400"/>
            </aside>
          </div>
            <div className="horizontal">
            <button className="btn btn-primary btn-md waves-effect text-center m-b-20" onClick={() => handleClick(0)}> Cat </button>
            
            <button className="btn btn-primary btn-md waves-effect text-center m-b-20" onClick={() => handleClick(1)}> Dog </button>
            </div>
          
          <button className="btn btn-primary  btn-md waves-effect text-center m-b-20"
          onClick={handleCompletion}>Complete</button>
          
        </div>
      </div>
    )
};


export default CompleteTask;