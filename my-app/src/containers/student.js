import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentProfile from "../components/Student/StudentProfile";
import "./student.scss";
import StudentDashboard from "../components/Student/StudentDashboard";
import StudentExercise from "../containers/studentExercise";
// import StudentCustomPlan from "../components/Student/StudentCustomplan"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function Student(props) {
  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/students").then(res => {
      const students = res.data[0];

      setAllStudents(students);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "5%",
          padding: "10px",
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
            <StudentProfile studentData={props.studentData} />
          </Route>

          <Route path="/student/dashboard">
            <StudentDashboard />
          </Route>

          <Route path="/student/my_plan">
            <StudentExercise studentData={props.studentData}/>
          </Route>

        </Switch>
      </div>

      <div style={{ flex: 1, padding: "10px" }}></div>
    </div>
  );
}
