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
const AllTasks = () => {
  
  // TODO : Get the list from Firebase instead of localstorage
  const [tasks, setTasks] = useState([]);
  // const [TaskList, setTaskList] = useState([]);
  // const checkmark = '✓';
  
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
        <div className="row align-items-left my-5">
          
          <Route path="/" render={() => <TaskPage tasks={tasks}/>}/>
          
        </div> 
      </div> 
    </div>
    // </div>
  );
};

export default AllTasks;
