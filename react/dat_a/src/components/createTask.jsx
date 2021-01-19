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
import HyperLink from "./hyperlink";
// import AuthFormBox from "./auth-form-box";
import Button from "./button";

//Firebase Import
import { app } from "../base";

// Image Import 
// import {NewImage} from "./NewImage"

//---------------------------------------------------------------------

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const db = app.firestore();
// var TaskName = "Default Task Name";

const CreateTask = () => {
  
  const forceUpdate = useForceUpdate();
  const [taskName, setTaskName] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [taskLength, setTaskLength] = useState(0);
  const [labelsList, setLabelsList] = useState(["cat", "dog"]);
  const [taskDescription, setTaskDescription] = useState("");
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  
  
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

  const onNewLabelChange = (e) => {
    setNewLabel(e.target.value);
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
      labels: labelsList
    });
    TaskList.push({
      Task: taskName,
      length: taskLength,
      labels: []
    });
    setTaskList(TaskList);
    // store.set("TaskList", TaskList);
    history.push("/alltasks")
    setTaskName("");
  };

  const onCancel = () => {
    console.log("CANCEL")
    history.push("/researcher")
    setTaskName("");
  };

  const  handleClick = (e) => {
    labelsList.push(e)
    setLabelsList(labelsList)
    setNewLabel("")
    forceUpdate()
    console.log(labelsList)
  };

  const  handleDelete = (e) => {
    labelsList.splice(e, 1)
    setLabelsList(labelsList)
    forceUpdate()
    console.log(labelsList)
  };


  const history = useHistory();  
  
  return (
    <div>
      <div className="container">
        <header>
        <h1>Create a new Task Template</h1>
        Back to <HyperLink path="/researcher">
            Dashboard
          </HyperLink>
        </header>
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
                      <option selected value="binary">Classification</option>
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
                <label> Label names
                  <div className="horizontal">
                    {labelsList && 
                      labelsList.map((label, idx) => {
                        return <button type="button" className="btn btn-secondary btn-md waves-effect text-center m-b-20" onClick={() => handleDelete(`${idx}`)}
                    > {label} </button>
                      })
                    }
                  </div>
                  <div className="horizontal">
                    <input 
                    className="short"
                    name="newlabel"
                    type="text"
                    value={newLabel}
                    onChange={onNewLabelChange}
                    placeholder="New..."
                    />
                  
                    <button type= "button" className="btn btn-primary btn-md waves-effect text-center m-b-20" onClick={() => handleClick(`${newLabel}`)}> Add </button>
                    
                  </div>
                </label>
                </div>
                <div className="horizontal">
                {/* <label> Upload Pictures
                  NewImage
                </label> */}
                <button className="btn btn-primary btn-md waves-effect text-center m-b-20">Create</button>
                <button type="button" className="btn btn-primary btn-md waves-effect text-center m-b-20"
                onClick={onCancel}>Cancel</button>                
              </div>
          </form>

        </div>
      </div>
    </div>
  );
};
export default CreateTask;
