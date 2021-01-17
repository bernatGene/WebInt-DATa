import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import store from "store";
import TaskListItem from "./task-list-item";
import Button from "./button";
import HyperLink from "./hyperlink";



const Annotator = () => {
  let match = useRouteMatch();
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );

  return (
    <div className="annotator">
      <div className="container">  
        <div className="row align-items-left my-5">
          <div className="col-lg-7">
            <h1>Annotator</h1>
          </div>
          <br/>
          <div className="col-lg-7">
            {TaskList &&
              TaskList.map((TaskItem, idx) => (
                <TaskListItem key={`Task-${idx}`}>{`${idx + 1} - ${TaskItem.Task
                  } - Progress: ${TaskItem.labels.length} / ${TaskItem.length} `}</TaskListItem>
              ))}
          </div>
          <HyperLink path="/researcher">
            <Button>Change role to Researcher</Button>
          </HyperLink>
        </div> 
      </div> 
    </div>



            
  );
}
export default Annotator;
