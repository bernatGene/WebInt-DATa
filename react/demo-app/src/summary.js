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

const Summary = () => {
  return (
    <div>
      <h3> Summary of Tasks </h3>
      <p>
        Here you can see a list of your active Tasks with a brief summary of their stats  
      </p>
      <li>
        <Link >Task 1</Link>
      </li>
      <li>
        <Link >Task 2</Link>
      </li>

    </div>
  );
}
export default Summary;

