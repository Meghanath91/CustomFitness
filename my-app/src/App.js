import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
