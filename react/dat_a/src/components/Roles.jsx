import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./button";
import HyperLink from "./hyperlink";

function Roles(props) {
  return (
    <div className="roles">
        <div className="container">
          <header> 
            <h1 className="font-weight-light">Select Your Role</h1>
          </header>
          <section className="center row">
          <aside>
          <HyperLink path="/researcher">
            <h1 className="link">Researcher</h1>
          </HyperLink>
          </aside>
          <aside>
          <HyperLink path="/annotator">
            <h1 className="link">Annotator</h1>
          </HyperLink>
          </aside>                  
          </section>
      </div>
    </div>
  );
}
export default withRouter(Roles);
