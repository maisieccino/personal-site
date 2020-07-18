import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./assets/dracula-prism.css";
import { Wrapper } from "./features";

import { Navigation } from "./components/navigation";

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper />
        <Navigation></Navigation>
      </Router>
    </div>
  );
};

export default App;
