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
        <HyperLink path="/researcher">
        <Button>Researcher</Button>
      </HyperLink>
      </div>
      <br />
      <div className="col-md-12">
        {" "}
      <HyperLink path="/annotator">
        <Button>Annotator</Button>
      </HyperLink>
      </div>
    </div> </div>
  );
}
export default withRouter(Roles);
