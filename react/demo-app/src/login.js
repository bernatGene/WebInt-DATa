import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Researcher from './researcher'
import Annotator from './annotator'

const Login = () => {
	let match = useRouteMatch();
  return (
    <div>
    	<h3>Login here:</h3>
        <li>
          <Link to={`${match.url}/researcher`}>researcher</Link>
        </li>
        <li>
          <Link to={`${match.url}/annotator`}>annotator</Link>
        </li>

        <Switch>
	        <Route path={`${match.path}/researcher`}>
	          <Researcher />
	        </Route>
	        <Route path={`${match.path}/annotator`}>
	          <Annotator />
	        </Route>
      	</Switch>
    </div>
  );
}
export default Login;