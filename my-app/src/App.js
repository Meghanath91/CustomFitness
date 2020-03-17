// Main State stored here and Routes
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import ExerciseList from "./components/Customplan/ExerciseList";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./containers/dashboard";

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

      {/* always showing  - outside of switch */}

      <Navbar /> 

      {/* Having sidebar below will keep the navbar running on all pages, we will get rid of this after and only display it on pages the other pages */}
      <Sidebar/>


      {/* <div style={{display: flex}}>  */}
        {/* { isLoggedin && } */}

        <div>


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
                <Route path='/trainer/dashboard'>
               Pathway: /trainer/Dashboard
                <Dashboard/>
                {/* <Sidebar/> */}
               </Route>

                <Route path='/trainer/profile'>
                {/* <Sidebar/> */}
                <Card/>

              </Route>


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

          <Route path='/'>
                Pathway: / AKA Home Page
                {/* <Sidebar/> */}
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
