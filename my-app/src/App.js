// Main State stored here and Routes
import React from "react";
import {Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

//login/register routes
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

//trainer route
import Trainer from "./containers/trainer";
import TrainerSidebar from "./components/Trainer/TrainerSidebar";
import TrainerDashboard from "./components/Trainer/TrainerDashboard";
import CustomPlan from "./components/Trainer/Customplan/Customplan";
//student route
import Student from "./containers/student";
import StudentSidebar from "./components/Student/StudentSidebar";
import StudentDashboard from "./components/Student/StudentDashboard";

import Exercise from "./containers/exercise";
import Home from "./components/Home/Home";

function App() {
  // Store global state like user here

  // handleLogin

  return (
    <Router>
      {/* always showing  - outside of switch */}

      <Navbar />

      {/* Having sidebar below will keep the navbar running on all pages, we will get rid of this after and only display it on pages the other pages */}
      {/* <Sidebar/> */}

      {/* <div style={{display: flex}}>  */}
      {/* { isLoggedin && } */}

      <div></div>

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
          <Route path="/trainer">
            {/* <TrainerSidebar /> */}
            <TrainerDashboard />
            <Redirect to="/trainer/dashboard" />
         
            <Route path="dashboard">
              <TrainerDashboard />
              {/* <Sidebar/> */}
            </Route>

            <Route path="profile">
              <Trainer />
            </Route>

            <Route path="create_plan">
              <Student className="student-profile" />
              <Exercise />
            </Route>

          </Route>

          

          <Route path="/student/dashboard">
            <StudentDashboard pagename="Testing" />
          </Route>

          <Route path="/student/profile">
            <Student pagename="Profile" />
          </Route>

          <Route path="/student/my_plan">
            <CustomPlan />
          </Route>

          <Route path="/student">
            student/home
            <StudentSidebar />
          </Route>

          

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
            {/* <Sidebar/> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
