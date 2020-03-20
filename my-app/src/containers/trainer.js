import React, { useState, useEffect } from "react";
import axios from "axios";
import Trainer_profile from "../components/Trainer/Trainer_profile";
import Trainer_dashboard from "../components/Trainer/Trainer_dashboard";
import CustomPlan from "../components/Trainer/Customplan/Customplan"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Trainer(props) {
  console.log("props in trainer.js ====>", props);
  // const [state, setState] = useState("Trainer_dashboard");

  // console.log("state====>", state);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/trainer/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/trainer/profile">Profile</Link>
          </li>
          <li>
            <Link to="/trainer/create_plan">Create custom plan</Link>
          </li>
        </ul>
        <Switch>

        <Route path="/trainer/profile">
          <Trainer_profile trainerData={props.trainerData}/>
        </Route>

        <Route path="/trainer/dashboard" >
          <Trainer_dashboard/>
        </Route>

        <Route path= "/trainer/create_plan">
          <CustomPlan/>
          </Route>

      </Switch>
      </div>

      <div style={{ flex: 1, padding: "10px" }}></div>
    </div>
  );
}
