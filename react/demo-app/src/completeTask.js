import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

var TaskName = "Default Task Name"

const CompleteTask = () => {
  return (
    <div>
    	<Task />
		  <p>
        Here you would work on a Task. Annotate, go back, check the description, etc.  
      </p>
    </div>
  );
}
export default CompleteTask;

function Task() {
  let match = useRouteMatch();
  TaskName = match.params.Taskname
  return ( 
      <div>
        <h3> {TaskName} </h3>
        <p>
          Here you would load a Task from a JSON or smth  
        </p>
      </div>

    )
}