import React, { useState } from "react";
import store from "store";
import TaskListItem from "./task-list-item";
import Heading from "./heading";
import Button from "./button";
import HyperLink from "./hyperlink";

const Researcher = () => {
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const checkmark = '✓';

  return (
    <div className="researcher">
      <div className="container">  
        <div className="row align-items-left my-5">
          <div className="col-lg-7">
            <h1>Researcher</h1>
          </div>
          <br/>
          <div className="col-lg-7">
            <HyperLink path="/createTask">
              <Button>Create new Task</Button>
            </HyperLink>
            {TaskList &&
              TaskList.map((TaskItem, idx) => {
                return `${TaskItem.length}` <= `${TaskItem.labels.length}` ?
                <TaskListItem key={`Task-${idx}`}>{`${idx + 1} - ${TaskItem.Task
                  } - ${TaskItem.labels.length} / ${TaskItem.length} ${checkmark}`}</TaskListItem>
                  :
                <TaskListItem key={`Task-${idx}`}>{`${idx + 1} - ${TaskItem.Task
                } -  ${TaskItem.labels.length} / ${TaskItem.length}`}</TaskListItem>
              })
            }
          </div>
          <HyperLink path="/annotator">
            <Button>Change role to annotator</Button>
          </HyperLink>
        </div> 
      </div> 
    </div>
    // </div>
  );
};

export default Researcher;
