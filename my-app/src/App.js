import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

//trainer route
import Trainer_Sidebar from "./components/Trainer/Trainer_Sidebar";
import Trainer_profile from "./components/Trainer/Trainer_profile";
import CustomPlan from "./components/Trainer/Customplan/Customplan";

//student route
import Student_Sidebar from "./components/Student/student_side_bar";
import Student_profile from "./components/Student/student_profile";
import Student_my_plan from "./components/Student/student_my_plan";
import Student_dashboard from "./components/Student/student_dashboard";

function App() {
  // Store global state like user here

  // handleLogin

  return (
    <Router>
      {/* Router */}

      {/* always showing  - outside of switch */}
      <Navbar />
      {/* <Sidebar /> */}

      {/* <div style={{display: flex}}>  */}
      {/* { isLoggedin && } */}

      {/* Switch */}
      {/* Route = .... */}
      <div>
        <Switch>
          {/* <Route path='/trainer/'>
              <Sidebar/>

              </Route> */}
          {/* /dashboard <Dashboard></Dashboard>
              /trainers/:id <Trainer></Trainer>
              /profile  (<Profile></Profile>)
              /plans/new <PlansCreate></PlansCreate>
              /plans/:id <PlansShow></PlansShow>
              /plans <PlansList></PlansList> */}

          {/* useParams */}
          <Route path="/trainer/dashboard">Dashboard</Route>

          <Route path="/trainer/profile">
            <Trainer_profile />
          </Route>

          <Route path="/trainer/create_plan">
            <CustomPlan />
          </Route>

          <Route path="/student/dashboard">
            <Student_dashboard />
          </Route>

          <Route path="/student/profile">
            <Student_profile />
          </Route>

          <Route path="/student/my_plan">
            <Student_my_plan />
          </Route>

          <Route path="/student">
            student/home
            <Student_Sidebar />
          </Route>

          <Route path="/trainer">
            trainer/home
            <Trainer_Sidebar />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">Home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
