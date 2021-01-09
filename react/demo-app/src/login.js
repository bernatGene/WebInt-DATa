import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Login = () => {
  return (
    <div>
    	<h3>Login here:</h3>
		<li>
          <Link to="/">Home</Link>
        </li>
    </div>
  );
}
export default Login;

function Home() {
  return <h2>Home</h2>;
}