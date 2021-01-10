import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import CompleteTask from './completeTask'


const Annotator = () => {
  let match = useRouteMatch();
  return (
    <div>
    	<h3>Annotator role:</h3>
      <p> Here you would browse tasks and select one </p>

		  <li>
          <Link to={`${match.url}/completeTask/task1`}>Task 1</Link>
      </li>
      <li>
          <Link to={`${match.url}/completeTask/task2`}>Task 2</Link>
      </li>
      <Switch>
          <Route path={`${match.path}/completeTask/:taskname`}>
            <CompleteTask />
          </Route>
      </Switch>
    </div>

  );
}
export default Annotator;
