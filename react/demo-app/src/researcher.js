import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Summary from './summary'
import CreateTask from './createTask'

const Researcher = () => {
  let match = useRouteMatch();
  return (
    <div>
    	<h3>Researcher Role:</h3>
      <li>
          <Link to={`${match.url}/createTask`}>Create a Task</Link>
      </li>
      <li>
          <Link to={`${match.url}/summary`}>Summary</Link>
      </li>
      <Switch>
          <Route path={`${match.path}/createTask/`}>
            <CreateTask />
          </Route>
          <Route path={`${match.path}/summary/`}>
            <Summary />
          </Route>
      </Switch>
    </div>
  );
}
export default Researcher;
