import React from "react";
import { PropTypes } from "prop-types";
import HyperLink from "./hyperlink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const TaskListItem = ({ children }) => {

	let match = useRouteMatch();
	let f_showAs = (role) => {
		if (role == "/researcher") {return "/summary/"}
		if (role == "/annotator") {return "/completeTask/"}
	}
	let showAs = f_showAs(match.url)

	return (
	<div>
	<Link to={{
			    pathname: showAs+children.charAt(0),
			    state : {
			    	hash: "#"+children.charAt(0)	
			    }
			    
  			}}>
		<li class="alert alert-primary">{children}</li>
	</Link>
	
  	</div>
  	)
};

TaskListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskListItem;
