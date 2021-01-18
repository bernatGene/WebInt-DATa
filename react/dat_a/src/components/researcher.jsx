import React, { useState, useEffect } from "react";
import {app} from "../base" ;
import store from "store";
import TaskListItem from "./task-list-item";
import Heading from "./heading";
import Button from "./button";
import HyperLink from "./hyperlink";
import {Link, Route} from 'react-router-dom';
import {TaskPage} from "./TaskPage"


const db = app.firestore() ;


// Main function of the Page 
const Researcher = () => {
  
  // TODO : Get the list from Firebase instead of localstorage
  const [tasks, setTasks] = useState([]);
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const checkmark = '✓';
  
  // Get the list of Tasks from the database and return it to setTasks
  useEffect(() => {
    const unmount = db.collection("tasks").onSnapshot((snapshot) => {
      const tempTasks = [];
      snapshot.forEach((doc) => {
        tempTasks.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tempTasks);
    });
    return unmount;
  }, []);


  return (
    

    <div className="researcher">
      <div className="container">
      <div className="col-lg-7">
            <h1>Researcher</h1>
      </div>
      <br/>
      <div>
        <createTask />  
      </div>
      <div className="col-lg-7">
        <HyperLink path="./createTask">
            <Button>Create New Task</Button>
        </HyperLink>
      </div>
        <div className="row align-items-left my-5">
          
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
            <h3>You have no active tasks</h3>

          }
          </div> 
          <div>
          { <HyperLink path="/alltasks">
            <Button>See all Tasks</Button>
          </HyperLink> }
          </div>   
        
      </div> 
    </div>
    // </div>
  );
};

export default Researcher;
