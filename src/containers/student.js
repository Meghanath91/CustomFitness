import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentProfile from "../components/Student/My_profile/StudentProfile";
import "./student.scss";
import StudentDashboard from "../components/Student/Dashboard/StudentDashboard";
import StudentExercise from "../containers/studentExercise";
import Trainers from "../components/Student/Trainers/Trainers";
import { Switch, Route } from "react-router-dom";

export default function Student(props) {
  const [allTrainers, setAllTrainers] = useState([]);
  useEffect(() => {
    axios.get("/trainers").then((res) => {
      const trainers = res.data;
      setAllTrainers(trainers);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "5%",
          width: "100%",
        }}
      >
        <Switch>
          <Route path="/student/profile">
            <StudentProfile studentData={props.studentData} />
          </Route>

          <Route path="/student/my_plan">
            <StudentExercise studentData={props.studentData} />
          </Route>

          <Route path="/student/dashboard">
            <StudentDashboard studentData={props.studentData} />
          </Route>

          <Route path="/student/trainers">
            <Trainers
              allTrainers={allTrainers}
              studentData={props.studentData}
            />
          </Route>

          <Route path="/student/feedback">
            {/* <StudentFeedback studentData={props.studentData} /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}
