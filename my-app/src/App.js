// Main State stored here and Routes
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

//login/register routes
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

//trainer route
import Trainer from "./containers/trainer";
import Trainer_Sidebar from "./components/Trainer/Trainer_Sidebar";
import Trainer_dashboard from "./components/Trainer/Trainer_dashboard";
import CustomPlan from "./components/Trainer/Customplan/Customplan";
//student route
import Student from "./containers/student";
import Student_Sidebar from "./components/Student/student_side_bar";
import Student_dashboard from "./components/Student/student_dashboard";

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
          <Route path="/trainer/dashboard">
            <Trainer_dashboard />
            {/* <Sidebar/> */}
          </Route>

          <Route path="/trainer/profile">
            <Trainer />
          </Route>

          <Route path="/trainer/create_plan">
            <Student />
            <CustomPlan />
          </Route>

          <Route path="/student/dashboard">
            <Student_dashboard />
          </Route>

          <Route path="/student/profile">
            <Student />
          </Route>

          <Route path="/student/my_plan">
            <CustomPlan />
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
