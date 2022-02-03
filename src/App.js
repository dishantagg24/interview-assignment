import React from "react";
import { AreaOfConcern } from "./components/areasOfConcern";
import { CycleTime } from "./components/cycleTime";
import { Deployement } from "./components/deployement";
import { Milestone } from "./components/milestone";
import { Numbers } from "./components/numbers";

import "./App.css";

const App = () => {
  return (
    <main className="container">
      <div className="sub-container">
        <Numbers />
        <CycleTime />
      </div>
      <Deployement />
      <div className="sub-container">
        <Milestone />
        <AreaOfConcern />
      </div>
    </main>
  );
};

export default App;
