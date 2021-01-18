import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { NewImage } from "./NewImage";
import { app } from "../base";

const db = app.firestore();

export const Task = () => {
  const [images, setImages] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskLength, setTaskLength] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");
  

  const match = useRouteMatch("/:task");
  const { task } = match.params;

  useEffect(() => {
    const unmount = db.collection("tasks")
      .doc(task)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setTaskName(doc.data().name);
        setTaskLength(doc.data().length);
        setTaskDescription(doc.data().description);
      });
      return unmount
  }, []);

  return (
    <>
      <section>
        <header>
          <h1>{taskName}</h1>
          <p>Go to the <Link to="/researcher">Task page</Link></p>
        </header>
        <div>
           <h2>{taskDescription}</h2> 
        </div>
        {images.map((image) => (
          <aside key={image.name}>
            <img src={image.url} alt="task" />
          </aside>
        ))}
      </section>
      <footer>
        <NewImage currentTask={task} />
      </footer>
    </>
  );
};
