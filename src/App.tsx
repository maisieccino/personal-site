import React from "react";
import "./App.css";

import { Navigation } from "./components/navigation";
import { Home } from "./features";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home />
    </div>
  );
};

export default App;
