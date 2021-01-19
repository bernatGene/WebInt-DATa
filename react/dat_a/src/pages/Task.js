import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { NewImage } from "../components/NewImage";
import { app } from "../base";
import store from "store";
import { useHistory } from "react-router-dom";

const db = app.firestore();

export const Task = () => {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskLength, setTaskLength] = useState(0);
  const [TaskList, setTaskList] = useState(
    store.get("TaskList") || []
  );
  const [taskDescription, setTaskDescription] = useState("");
  const [labelsList, setLabelsList] = useState([]);

  

  const match = useRouteMatch("/:task");
  const { task } = match.params;

  const  handleClick = () => {
    TaskList.push({
      Task: taskName,
      length: images.length,
      labels: [],
      labelsList: labelsList

    });
    setTaskList(TaskList);
    store.set("TaskList", TaskList);
    console.log("creation");
    console.log(TaskList);
    history.push("/researcher")
  };

  useEffect(() => {
    const unmount = db.collection("tasks")
      .doc(task)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setTaskName(doc.data().name);
        setTaskLength(doc.data().length);
        setTaskDescription(doc.data().description);
        setLabelsList(doc.data().labels || ["0", "1"]);
      });
      return unmount
  }, []);

  return (
    <>
      <section className="container">
        <header>
          <h1>{taskName}</h1>
          <p>Go to the <Link to="/researcher">Task page</Link></p>
        </header>
        <div>
           <h2>{taskDescription}</h2> 
        </div>
        <div className="row align-items-left my-5">{images.map((image) => (
          <aside key={image.name}>
            <img src={image.url} alt="Could not load" />
          </aside>
        ))}</div>
      </section>

      <footer>
      <button className="btn btn-primary btn-md 
      waves-effect text-center m-b-20" onClick={() => handleClick()}> Activate </button>
        <NewImage currentTask={task} />
      </footer>
    </>
  );
};
