import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Login } from "./components";
import Layout from "./components/layout";
import AuthorisedPageContainer from "./components/authorised-page-container";
import store from "store";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              component={() => store.get("authorised") ? <Login /> : <Home />}
            />{" "}
            <Route path="/about" exact component={() => <About />} />{" "}
            <Route path="/contact" exact component={() => <Contact />} />{" "}
            <Route
              path="/Authorised"
              exact
              component={() => <AuthorisedPageContainer />}
            />{" "}
          </Switch>{" "}
        </Layout>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
