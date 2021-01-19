import React, { useState, useEffect } from "react";
import {app} from "../base" ;
import store from "store";
import TaskListItem from "../components/task-list-item";
import Heading from "../components/heading";
import Button from "../components/button";
import HyperLink from "../components/hyperlink";
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
      <header>
              <h1 className="center-text">Researcher</h1>
        Change role to <HyperLink path="/annotator">
            Annotator
          </HyperLink>
      </header>
      
      <div>
      <div className="row horizontal right">
          { <HyperLink path="/alltasks">
            <Button>See all Templates</Button>
          </HyperLink> }
          <HyperLink path="./createTask">
            <Button>Create new Task</Button>
          </HyperLink>
      </div> 
      <section className="block card">
      <div className="col-lg-7 card-block moremargin">
        <h4>Active tasks</h4>
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
            <h3>You have no active tasks</h3>
          }
      </div> 
      </section>
      </div> 
      </div>
    </div>
  );
};

export default Researcher;
