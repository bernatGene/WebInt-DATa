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
import AuthFormBox from "./auth-form-box";
import Button from "./button";

var TaskName = "Default Task Name";

const CreateTask = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [description, setDescription] = useState("");
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };
  const handleTaskSubmit = (e) => {
    TaskList.push({
      Task: title,
      description: description,
      length: length,
      labels: []
    });
    console.log(TaskList);
    setTaskList(TaskList);
    store.set("TaskList", TaskList);
    console.log("creation");
    history.push("/researcher");
  };
  return (
    <div>
    <div className="container">
    <h1>Create a new Task</h1>
      <div class='flex-container'>
      <form className="myform" onSubmit={handleTaskSubmit}>
            <div>
            <label> Task title
            <input
              name="title"
              type="text"
              onChange={handleTitleChange} />
            </label>
            <div>
            </div>
            <label> Description
            <textarea
              name="description"
              type="text"
              value={description}
              onChange={handleDescriptionChange} />
            </label>
            <div>
            </div>
            <label> Dataset length (# of Pictures)
            <input
              name="numpic"
              type="number"
              value={length}
              onChange={handleLengthChange}/>
            </label>
            <div>
            </div>
            <label> Upload Pictures
            <input
              name="upload"
              type="file"/>
            </label>
            </div>
            
            <Button>Create</Button>
      </form>
      </div>
    </div>
    </div>
  );
};
export default CreateTask;
