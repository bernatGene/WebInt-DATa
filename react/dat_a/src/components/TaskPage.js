import React from 'react'
import {Link} from 'react-router-dom'
import HyperLink from "./hyperlink";
import {createTask} from "./createTask"


export const TaskPage = ({tasks}) => {

  return <>
        <div className="col-lg-7">
            <header>
            <h1 className="text-center">All stored templates</h1>
            Back to { <HyperLink path="/researcher">
             dashboard
          </HyperLink> }
          </header>
        </div>
        <br/>
        <div>
        <createTask />  
        </div>
        <section>
        {tasks.map((Task) => (
                <Link to={`/${Task.id}`}>
                    <aside key={Task.name}>
                        <h3>{Task.name}</h3>
                    </aside>
                </Link>
        ))}
        </section>
        
  </>
}