import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import HyperLink from "../components/hyperlink";

function Roles(props) {
  return (
    <div className="roles">
        <div className="container">
          <header> 
            <h1 className="font-weight-light">Select Your Role</h1>
          </header>
          <section className="row align-items-center my-5">
          <aside>
            <div className="col-lg-1">
              <HyperLink path="/researcher">
                <h1 className="link">Researcher</h1>
              </HyperLink>
            </div>
          </aside>
          <aside>
            <div className="col-lg">
              <HyperLink path="/annotator">
                <h1 className="link">Annotator</h1>
              </HyperLink>
            </div>
          </aside>                  
          </section>
      </div>
    </div>
  );
}
export default withRouter(Roles);
