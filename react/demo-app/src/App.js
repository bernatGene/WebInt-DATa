import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Login } from "./components";
import Layout from "./components/layout";
import AuthorisedPageContainer from "./components/authorised-page-container";
import Roles from "./components/Roles";
import store from "store";
import Researcher from "./components/researcher";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              component={() => store.get("authorised") ? <Roles /> : <Home />}
            />{" "}
            <Route path="/about" exact component={() => <About />} />{" "}
            <Route path="/contact" exact component={() => <Contact />} />{" "}
            <Route
              path="/login"
              exact
              component={() => store.get("authorised") ? <Roles /> : <Login />}
            />{" "}
            <Route
              path="/Authorised"
              exact
              component={() => <AuthorisedPageContainer />}
            />{" "}
            <Route
              path="/researcher"
              exact
              component={() => <Researcher/>}
            />{" "}
          </Switch>{" "}
        </Layout>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
