import React from 'react'
import {Link} from 'react-router-dom'
import HyperLink from "../components/hyperlink";
import {createTask} from "../pages/createTask"


export const TaskPage = ({tasks}) => {

  return (

  <div className="container">
    <header>
            <h1 className="text-center">All stored templates</h1>
            Back to { <HyperLink path="/researcher">
             dashboard
            </HyperLink> }
         </header>
    <br/>
    <section>
        {tasks.map((Task) => (
                <Link to={`/${Task.id}`}>
                    <aside key={Task.name}>
                        <h3>{Task.name}</h3>
                    </aside>
                </Link>
        ))}
    </section>
        
  </div>)
}