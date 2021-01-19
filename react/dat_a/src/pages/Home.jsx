import React, {useState} from "react";
import store from "store";
import AuthFormBox from "../components/auth-form-box";
import Input from "../components/input";
import Button from "../components/button";
import HyperLink from "../components/hyperlink";
import { withRouter } from "react-router-dom";

function Home(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [passwdchk, setPasswdChk] = useState(false)
  const [success, setSuccess] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set credentials in localStorage
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if ( re.test(email) ) {
      store.set("username", email); 
    }else{
      alert("The email does not look valid")
    }

    if ( repeatPassword === password ){
      // setPasswdChk(true);
      setSuccess(true) ;
      store.set("password", password); 
    }else{
      alert("The passwords do not match")
    }
    

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
                  type="email"
                  handleChange={handleEmailChange}
                />
                <Input
                  name="password"
                  placeholder="Password"
                  value={password}
                  handleChange={handlePasswordChange}
                  type="password"
                />
                <Input
                  name="Repeat password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  handleChange={handleRepeatPasswordChange}
                  type="password"
                />
                <div className="buttonContainer">
                  <Button>Register</Button>
                </div>
                { success ?
                  <h6 className="text-center heading success">Registration Successful</h6> : ""}
                
              </AuthFormBox>
            </div>
            
            <div className="or-container">
              <div className="line-separator"></div>
              <div className="or-label">or</div>
              <div className="line-separator"></div>
            </div>

            <p className="text-inverse text-center">
              Already have an account? &nbsp;
              <HyperLink path="/login">Login here</HyperLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
