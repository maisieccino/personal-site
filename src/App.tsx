import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Navigation } from "./components/navigation";
import { Home, About, Data, Blog, Uses } from "./features";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/uses">
            <Uses />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Navigation></Navigation>
      </Router>
    </div>
  );
};

export default App;
