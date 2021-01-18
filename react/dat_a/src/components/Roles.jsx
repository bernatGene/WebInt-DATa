import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./button";
import HyperLink from "./hyperlink";

function Roles(props) {
  return (
    <div className="roles">
        <div className="container">
          <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Select Your Role</h1>
          </div> 
          <br/>
          <div className="col-sm-8">
            {" "}
            <HyperLink path="/researcher">
              <Button>Researcher</Button>
            </HyperLink>
          </div>
          <br />
          <div className="col-sm-8">
            {" "}
            <HyperLink path="/annotator">
              <Button>Annotator</Button>
            </HyperLink>                  
          </div>
          </div>
      </div>
    </div>
  );
}
export default withRouter(Roles);
