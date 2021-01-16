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
  const handleTaskSubmit = (e) => {
    TaskList.push({
      Task: title,
      description: description,
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
      <form className="myform" onSubmit={handleTaskSubmit}>
            <label> Task title
            <input
              name="title"
              type="text"
              onChange={handleTitleChange} />
            </label>
            <label> Description
            <textarea
              name="description"
              type="text"
              value={description}
              onChange={handleDescriptionChange} />
            </label>
            
            <Button>Create</Button>
      </form>
    </div>
    </div>
  );
};
export default CreateTask;
