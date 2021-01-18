import React from 'react'
import {Link} from 'react-router-dom'
// import {NewAlbumForm} from './NewAlbumForm'
import HyperLink from "./hyperlink";

// import TaskListItem from "./task-list-item";
// import Heading from "./heading";
import Button from "./button";
import {createTask} from "./createTask"
// import HyperLink from "./hyperlink";

export const TaskPage = ({tasks}) => {

  return <>
        <div className="col-lg-7">
            <h1>All stored tasks</h1>
        </div>
        <br/>
        <div>
        <createTask />  
        </div>
        <section>
        {tasks.map((Task) => (
                <Link to={`/${Task.id}`}>
                    <aside key={Task.name}>
                        {/* <img src={album.images ? album.images[0].url : ""} alt="album" /> */}
                        <h3>{Task.name}</h3>
                    </aside>
                </Link>
        ))}
        </section>
        
  </>
}