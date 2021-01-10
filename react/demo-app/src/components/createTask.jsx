import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

var taskName = "Default Task Name";

const CreateTask = () => {
  return (
    <div>
      <h3> Task Creation </h3>
      <p>
        Here you would create a task. Upload pictures, set a description,
        reward, etc.
      </p>
    </div>
  );
};
export default CreateTask;
