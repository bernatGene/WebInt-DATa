import React, { useState } from "react";
import store from "store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import TaskListItem from "./task-list-item";
import { useHistory } from "react-router-dom";
// import AuthFormBox from "./auth-form-box";
import Button from "./button";

//Firebase Import
import { app } from "../base";

// Image Import 
// import {NewImage} from "./NewImage"

//---------------------------------------------------------------------



const db = app.firestore();
// var TaskName = "Default Task Name";

const CreateTask = () => {
  
  const [taskName, setTaskName] = useState("");
  const [taskLength, setTaskLength] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");
  
  
  // Handling Task Parameter Changes
  const onTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const onTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const onTaskLengthChange = (e) => {
    setTaskLength(e.target.value);
  };
  
  // Handling Task Submit 
  const onTaskSubmit = () => {
    if (!taskName) {
      return;
    }
    db.collection("tasks").doc(taskName).set({
      name: taskName,
      description: taskDescription,
      length: taskLength,
      labels: []
    });
    setTaskName("");
    //  console.log(TaskList);
    console.log("creation");
    history.push("/researcher");
  };

  const history = useHistory();

  // const onTaskSubmit = (e) => {
  //   if(!taskName ||){
  //     return
  //   }
    
    
  //   db.collection("tasks").doc(taskName).set({
  //     name: taskName,
  //     description: taskDescription,
  //     length: 0,
  //     labels: []
  //   });
  // }



  // const [title, setTitle] = useState("Unnamed task");
  // const [TaskList, setTaskList] = useState(
  //   store.get("TaskList") || []
  // );
  // const handleDescriptionChange = (e) => {
    // setDescription(e.target.value);
  // };
  // const handleTitleChange = (e) => {
    // setTitle(e.target.value);
  // };
  // const handleLengthChange = (e) => {
    // setLength(e.target.value);
  // };
  // const handleTaskSubmit = (e) => {
  //   TaskList.push({
  //     Task: title,
  //     description: description,
  //     length: length,
  //     labels: []
  //   });
  //   console.log(TaskList);
  //   setTaskList(TaskList);
  //   store.set("TaskList", TaskList);
  //   console.log("creation");
  //   history.push("/researcher");
  // };
  
  
  
  
  
  return (
    <div>
      <div className="container">
        <h1>Create a new Task</h1>
        <div className='flex-container'>
          <form className='form' onSubmit={onTaskSubmit}>
                <div>
                  <label> Name of the task
                  <input
                    name="Name"
                    type="text"
                    value={taskName}
                    onChange={onTaskNameChange} />
                  </label>
                <div>
                </div>
                <label> Description
                <textarea
                  name="description"
                  type="text"
                  value={taskDescription}
                  onChange={onTaskDescriptionChange} />
                </label>
                <div>
                </div>
                <label> Dataset length (# of Pictures)
                <input
                  name="numpic"
                  type="number"
                  value={taskLength}
                  onChange={onTaskLengthChange}/>
                </label>
                <div>
                </div>
                {/* <label> Upload Pictures
                  NewImage
                </label> */}
                </div>
                
                <Button onClick={onTaskSubmit}>Create</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateTask;
