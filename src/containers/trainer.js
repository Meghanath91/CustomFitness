import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainerProfile from "../components/Trainer/My_profile/ProfileTr/ProfileTr";
import TrainerDashboard from "../components/Trainer/Dashboard/TrainerDashboard";
import Students from "../components/Trainer/Students/Students";
import Exercise from "../containers/exercise";

import { Switch, Route } from "react-router-dom";

export default function Trainer(props) {
  const [myStudents, setMyStudents] = useState([]);
  useEffect(() => {
    axios.get(`/trainer/${props.trainerData.id}/students`).then((res) => {
      const students = res.data;
      setMyStudents(students);
    });
  }, [props.trainerData.id]);

  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "4%",
          background: "#ffffff",
          width: "100%",
        }}
      >
        <Switch>
          <Route path="/trainer/profile">
            <TrainerProfile trainerData={props.trainerData} />
          </Route>

          <Route path="/trainer/dashboard">
            <TrainerDashboard
              myStudents={myStudents}
              trainerData={props.trainerData}
            />
          </Route>

          <Route path="/trainer/students">
            <Students
              myStudents={myStudents}
              cards={cards}
              trainerData={props.trainerData}
            />
          </Route>

          <Route path="/trainer/create_plan">
            <Exercise myStudents={myStudents} trainerData={props.trainerData} />
          </Route>

          {/* <Route path="/trainer/feedback">
            <Exercise myStudents={myStudents} trainerData={props.trainerData}/>
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}
