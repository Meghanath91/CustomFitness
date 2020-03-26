// Main State stored here and Routes
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TrainerDashboard from "./components/Trainer/TrainerDashboard"
import StudentDashboard from "./components/Student/StudentDashboard"

//login/register routes
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

//trainer route
import Trainer from "./containers/trainer";
// import TrainerSidebar from "./components/Trainer/TrainerSidebar";
// import TrainerDashboard from "./components/Trainer/TrainerDashboard";
// import CustomPlan from "./components/Trainer/Customplan/Customplan";
//student route
import Student from "./containers/student";
// import StudentSidebar from "./components/Student/StudentSidebar";
// import StudentDashboard from "./components/Student/StudentDashboard";

// import Exercise from "./containers/exercise";
import Home from "./components/Home/Home";
import localforage from "localforage";

function App() {
  // Store global state like user here
  const [student, setStudent] = useState({});
  const [trainer, setTrainer] = useState({});
  // const [exercise,setExercise]=useState([]);

  useEffect(() => {
    localforage.getItem("usertype")
    .then(type=> {
      localforage.getItem("user")
      .then(storedUser=>{
        type === "trainer" 
        ? setTrainer(storedUser) 
        : setStudent(storedUser)
      })
    })
  }, [])
  

  return (
    <Router>
      {/* always showing  - outside of switch */}


      {/* Having sidebar below will keep the navbar running on all pages, we will get rid of this after and only display it on pages the other pages */}
      {/* <Sidebar/> */}

      {/* <div style={{display: flex}}>  */}
      {/* { isLoggedin && } */}

      {/* Switch */}
      {/* Route = .... */}
      {/* <div> */}
      <Navbar setTrainer={setTrainer} trainerData={trainer} setStudent={setStudent} studentData={student}/>
      <Switch>
        {/* <Route path='/trainer/'>
              <Sidebar/>

              </Route> */}
        {/* /dashboard <Dashboard></Dashboard>
              /trainers/:id <Trainer></Trainer>
              /profile  (<Profile></Profile>)
              /plans/new <PlansCreate></Plans`Create`>
              /plans/:id <PlansShow></PlansShow>
              /plans <PlansList></PlansList> */}
        
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login setTrainer={setTrainer} setStudent={setStudent} />
        </Route>

        <Route path="/trainer/">
          <Trainer trainerData={trainer} />
            <Redirect to="/trainer/dashboard" />
        </Route>

        <Route path="/student/">
          <Student studentData={student} />
            <Redirect to="/student/dashboard" />
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;
