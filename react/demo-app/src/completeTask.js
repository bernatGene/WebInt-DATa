import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

var taskName = "Default Task Name"

const CompleteTask = () => {
  return (
    <div>
    	<Task />
		  <p>
        Here you would work on a task. Annotate, go back, check the description, etc.  
      </p>
    </div>
  );
}
export default CompleteTask;

function Task() {
  let match = useRouteMatch();
  taskName = match.params.taskname
  return ( 
      <div>
        <h3> {taskName} </h3>
        <p>
          Here you would load a task from a JSON or smth  
        </p>
      </div>

    )
}