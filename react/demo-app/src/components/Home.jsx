import React from "react";
import store from "store";
import AuthFormBox from "./auth-form-box";
import Input from "./input";
import Button from "./button";
import HyperLink from "./hyperlink";
import { withRouter } from "react-router-dom";

function Home(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set credentials in localStorage
    store.set("username", email);
    store.set("password", password);
    alert("Registration successful.Please log In")
    window.location.reload();
  };
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.anolytics.ai/wp-content/uploads/2019/04/accureacy.png"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <br />
            <div className="col-sm-12">
              <AuthFormBox handleSubmit={handleSubmit}>
                <h3 className="text-center heading">Create your New Account</h3>
                <Input
                  name="email"
                  placeholder="Email"
                  value={email}
                  handleChange={handleEmailChange}
                />
                <Input
                  name="password"
                  placeholder="Password"
                  value={password}
                  handleChange={handlePasswordChange}
                  type="password"
                />
                <div className="buttonContainer">
                  <Button>Register</Button>
                </div>
              </AuthFormBox>
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <h3 className="text-center heading">Select your Role</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {" "}
                <input
                  type="submit"
                  className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                  name="researcher"
                  value="Researcher"
                />
              </div>
              <br />
              <div className="col-md-12">
                {" "}
                <input
                  type="submit"
                  className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                  name="annotator"
                  value="Annotator"
                />
              </div> 
  </div>*/}
            <div className="or-container">
              <div className="line-separator"></div>
              <div className="or-label">or</div>
              <div className="line-separator"></div>
            </div>

            <p className="text-inverse text-center">
              Already have an account?
              <HyperLink path="/login">Login here</HyperLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
