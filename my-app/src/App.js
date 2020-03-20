// Main State stored here and Routes
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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
// import StudentSidebar from "./components/Student/StudentSidebar";
import StudentDashboard from "./components/Student/StudentDashboard";

import Exercise from "./containers/exercise";
import Home from "./components/Home/Home";

function App() {
  // Store global state like user here
  const [student,setStudent]=useState({});
  const [trainer, setTrainer] = useState({});
  // const [exercise,setExercise]=useState([]);
  // handleLogin
  // const loggedIn = {
  //   isTrainer: true,
  //   isLoggedin: true
  // };

  return (
    <Router>
      {/* always showing  - outside of switch */}

      <Navbar />

      {/* Having sidebar below will keep the navbar running on all pages, we will get rid of this after and only display it on pages the other pages */}
      {/* <Sidebar/> */}

      {/* <div style={{display: flex}}>  */}
      {/* { isLoggedin && } */}

      {/* Switch */}
      {/* Route = .... */}
      {/* <div> */}
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
    
    
    
    
        
       
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login setTrainer={setTrainer} setStudent={setStudent}/>
        </Route>

        
        <Route path="/trainer">
          
          <Trainer trainerData={trainer} />
          {/* <Exercise exerciseData={exercise}/> */}
        </Route>

        {/* <Route path="/trainer/create_plan">
            <Student />
            <Exercise/>
            
          </Route> */}
        
        
        <Route path="/student">
          
          <Student studentData={student} />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
    
    
    
       
        
        
      </Switch>
     
    </Router>
  );
}

export default App;
