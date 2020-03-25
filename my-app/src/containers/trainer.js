import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainerProfile from "../components/Trainer/TrainerProfile";
import TrainerDashboard from "../components/Trainer/TrainerDashboard";
import Students from "../components/Trainer/Dashboard/Students";
import Exercise from "../containers/exercise";
// import CustomPlan from "../components/Trainer/Customplan/Customplan"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import Student from "../containers/student";
export default function Trainer(props) {
  console.log("id on trianer-------->", props.trainerData.id);

  const [myStudents, setMyStudents] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/trainer/${props.trainerData.id}/students`)
      .then(res => {
        const students = res.data;
      
        console.log("mystudents on trainer", students);
        setMyStudents(students);
      });
     
  }, [props.trainerData.id]);
  // console.log("props in trainer.js ====>", props);
  const cards = [1, 2, 3, 4, 5, 6];
  // const [state, setState] = useState("Trainer_dashboard");

  // console.log("state====>", state);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "5%",
          padding: "10px",
          // width: "40%",
          background: "#ffffff",
          width: "100%"
        }}
      >
        <Switch>
          <Route path="/trainer/profile">
            <TrainerProfile trainerData={props.trainerData} />
          </Route>

          <Route path="/trainer/dashboard">
            <TrainerDashboard  />
          </Route>

          <Route path="/trainer/students">
            <Students myStudents={myStudents} cards={cards} />
          </Route>

          <Route path="/trainer/create_plan">
            {/* <Student /> */}
            <Exercise />
          </Route>
        </Switch>
      </div>

      <div style={{ flex: 1, padding: "10px" }}></div>
    </div>
  );
}
