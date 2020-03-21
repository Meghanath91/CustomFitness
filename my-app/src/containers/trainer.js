import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainerProfile from "../components/Trainer/TrainerProfile";
import TrainerDashboard from "../components/Trainer/TrainerDashboard"
import CustomPlan from "../components/Trainer/Customplan/Customplan"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default function Trainer(props) {
  console.log("props in trainer.js ====>", props);
  // const [state, setState] = useState("Trainer_dashboard");

  // console.log("state====>", state);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          // width: "40%",
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
          <TrainerProfile trainerData={props.trainerData}/>
        </Route>

        <Route path="/trainer/dashboard" >
          <TrainerDashboard/>
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
