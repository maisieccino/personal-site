import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/dracula-prism.css";

import { Navigation } from "./components/navigation";
import { Home, About, Data, Blog, Uses } from "./features";

const routes = [
  { path: "/about", component: About },
  { path: "/uses", component: Uses },
  { path: "/data", component: Data },
  { path: "/blog", component: Blog },
  { path: "/", component: Home }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          {routes.map(route => (
            <Route exact path={route.path}>
              {({ _ }) => <route.component />}
            </Route>
          ))}
        </div>
        <Navigation></Navigation>
      </Router>
    </div>
  );
};

export default App;
