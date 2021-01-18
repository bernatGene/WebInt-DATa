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
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  
  
  // Handling Task Parameter Changes
  const onTaskNameChange = (e) => {
    console.log(TaskList)
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
      labels: ["cat", "dog"]
    });
    TaskList.push({
      Task: taskName,
      length: taskLength,
      labels: []
    });
    setTaskList(TaskList);
    // store.set("TaskList", TaskList);
    history.push("/researcher")
    setTaskName("");
  };

  const onCancel = () => {
    console.log("CANCEL")
    history.push("/researcher")
    setTaskName("");
  };

  const history = useHistory();  
  
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
                </div>
                <div>
                  <label> Type of task
                  <select >
                      <option selected value="binary">Binary classification</option>
                      <option value="other">Other (Unsupported)</option>
                  </select>    
                  </label>
                </div>
                <div>
                <label> Description
                <textarea
                  name="description"
                  type="text"
                  value={taskDescription}
                  onChange={onTaskDescriptionChange} />
                </label>
                </div>
                <div>
                <label> Dataset length (# of Pictures)
                <input
                  name="numpic"
                  type="number"
                  value={taskLength}
                  onChange={onTaskLengthChange}/>
                </label>
                </div>
                <div>
                {/* <label> Upload Pictures
                  NewImage
                </label> */}
                <Button onClick={onTaskSubmit}>Create</Button>                
                </div>
          </form>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default CreateTask;
