import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import ExerciseList from "./components/Customplan/ExerciseList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  // Store global state like user here

  // handleLogin

  
  return (
    <Router>
      {/* Router */}

      {/* always showing  - outside of switch */}
      <Navbar /> 

      {/* <div style={{display: flex}}>  */}
        {/* { isLoggedin && } */}
        {/* <Sidebar/> */}

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
                Dashboard
              <Card/>
              <ExerciseList />
              </Route>

              <Route path='/student/dashboard'>
              <Sidebar/>
              </Route>


              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>


              <Route path='/'>
                Home
              </Route>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
