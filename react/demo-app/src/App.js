import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Login } from "./components";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
