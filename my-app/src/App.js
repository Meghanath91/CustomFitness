import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import Sidebar from "./components/Dashboard/Sidebar";
import Card from "./components/Card/Card";
import ExerciseList from "./components/Customplan/ExerciseList";

function App() {
  // Store global state like user here

  // handleLong

  
  return (
    <div>

      {/* Router */}
        {/* always showing  - outside of switch */}
        <Navbar /> 
        <Sidebar/>

        {/* Switch */}
          {/* Route = .... */}
          <Card/>
          <dashboard_trainer/>

      <Navbar />
      <ExerciseList />

    </div>
  );
}

export default App;
