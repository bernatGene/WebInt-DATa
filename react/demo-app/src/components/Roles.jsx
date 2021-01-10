import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./button";
import HyperLink from "./hyperlink";

function Roles(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center heading">Select your Role</h3>
        </div>
      </div>
      <div className="row">
      <div className="col-md-12">
        {" "}
      <Button>
        <HyperLink path="/researcher">
          <span style={{ color: "white" }}>Researcher</span>
        </HyperLink>
      </Button> 
      </div>
      <br />
      <div className="col-md-12">
        {" "}
        <Button>
        <HyperLink path="/annotator">
          <span style={{ color: "white" }}>Annotator</span>
        </HyperLink>
      </Button>
      </div>
    </div> </div>
  );
}
export default withRouter(Roles);
