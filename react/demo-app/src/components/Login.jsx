import React from "react";
import store from "store";
import AuthFormBox from "./auth-form-box";
import Input from "./input";
import Button from "./button";

function Login() {
  //Initialise
  const [errorText, setErrorText] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get credentials from localStorage
    if (
      store.get("username") === username &&
      store.get("password") === password
    ) {
      store.set("authorised", true);
      setErrorText("");
      window.location.href="/Roles"
    } else {
      setErrorText("Invalid Credentials");
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Login</h1>
            <AuthFormBox handleSubmit={handleSubmit}>
              <Input
                name="username"
                placeholder="Username"
                value={username}
                handleChange={handleUsernameChange}
              />
              <Input
                name="password"
                placeholder="Password"
                value={password}
                handleChange={handlePasswordChange}
                type="password"
              />
              <div>
                <Button>Login</Button>
              </div>
              {!store.get("authorised") && (
                <div className="errorText">{errorText}</div>
              )}
            </AuthFormBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
