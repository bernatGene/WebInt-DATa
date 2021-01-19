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
import TaskListItem from "../components/task-list-item";
import Button from "../components/button";
import HyperLink from "../components/hyperlink";



const Annotator = () => {
  let match = useRouteMatch();
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  var checkmark = '✓';
  return (
    <div className="annotator">
      <div className="container"> 
        <header>
          <h1 className="center-text">Annotator</h1>
          Change role to <HyperLink path="/researcher">
              Researcher
            </HyperLink>
        </header>
        <div className="block card">
            <div className="col-lg-7 card-block moremargin">
            <h4>Available tasks</h4>
              <div className="line-separator"></div>
              <br/>
              {TaskList &&
                TaskList.length > 0 ?
                TaskList.map((TaskItem, idx) => {
                  return `${TaskItem.length}` <= `${TaskItem.labels.length}` ?
                  <TaskListItem key={`Task-${idx}`}>{`${idx + 1} - ${TaskItem.Task
                    } - ${TaskItem.labels.length} / ${TaskItem.length} ${checkmark}`}</TaskListItem>
                    :
                  <TaskListItem key={`Task-${idx}`}>{`${idx + 1} - ${TaskItem.Task
                  } -  ${TaskItem.labels.length} / ${TaskItem.length}`}</TaskListItem>
                })
              :
              <h3>There seem to be no tasks for now...</h3>
            }
            </div>
          </div> 
      </div> 
    </div>



            
  );
}
export default Annotator;
