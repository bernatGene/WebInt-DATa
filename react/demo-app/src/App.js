import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Login } from "./components";
import Layout from "./components/layout";
import AuthorisedPageContainer from "./components/authorised-page-container";
import Roles from "./components/Roles";
import store from "store";
import Researcher from "./components/researcher";
import Annotator from "./components/Annotator"
import CreateTask from "./components/createTask"
import CompleteTask from "./components/CompleteTask"
import Summary from "./components/Summary"

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
            <Route
              path="/annotator"
              exact
              component={() => <Annotator/>}
            />{" "}
            <Route
              path="/createTask"
              exact
              component={() => <CreateTask/>}
            />{" "}
            <Route
              path="/completeTask/:Tasknum"
              exact
              component={() => <CompleteTask/>}
            />{" "}
            <Route
              path="/summary/:Tasknum"
              exact
              component={() => <Summary/>}
            />{" "}
          </Switch>{" "}
        </Layout>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
