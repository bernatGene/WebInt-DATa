import React, { useState } from "react";
import { app } from "./base";

const db = app.firestore();

export const NewProjectForm = () => {
  const [projectName, setProjectName] = useState("");

  const onProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const onProjectCreate = () => {
    if (!projectName) {
      return;
    }
    db.collection("projects").doc(projectName).set({
      name: projectName,
    });
    setProjectName("");
  };

  return (
    <>
      <input value={projectName} onChange={onProjectNameChange} type="text" />
      <button onClick={onProjectCreate}>Create Project</button>
    </>
  );
};
