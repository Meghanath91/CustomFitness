import React, { useState, useEffect } from "react";
import axios from "axios";

import Student_dashboard from "../components/Student/student_dashboard";
// import CustomPlan from "../components/Trainer/Customplan/Customplan"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Student_profile from "../components/Student/student_profile";

export default function Student(props) {
  // const [state, setState] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/students").then(res => {
  //     const students = res.data[0];

  //     setState(students);
  //   });
  // }, []);

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
            <Link to="/student/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/student/profile">Profile</Link>
          </li>
          <li>
            <Link to="/student/my_plan">My custom plan</Link>
          </li>
        </ul>
        <Switch>

        <Route path="/student/profile">
          <Student_profile studentData={props.studentData}/>
        </Route>

        <Route path="/student/dashboard" >
          <Student_dashboard/>
        </Route>

        <Route path= "/student/my_plan">
          {/* <CustomPlan/> */}
          </Route>

      </Switch>
      </div>

      <div style={{ flex: 1, padding: "10px" }}></div>
    </div>
  );
}
