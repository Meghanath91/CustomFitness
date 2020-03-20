import React, { useState, useEffect } from "react";
import axios from "axios";
import Trainer_profile from "../components/Trainer/Trainer_profile";
import Trainer_Sidebar from "../components/Trainer/Trainer_Sidebar";
import Trainer_dashboard from "../components/Trainer/Trainer_dashboard";

export default function Trainer(props) {
  debugger;
  console.log("props in trainer.js ====>",props)
  const [state, setState] = useState("Trainer_dashboard");
  
  // useEffect(() => {
  //   axios.get("http://localhost:8080/trainers").then(res => {
  //     const trainers = res.data[0];

  //     setState(trainers);
  //   });
  // }, []);

  return (
    <div>
      <Trainer_Sidebar setMode={setState}/>
      {state=== "Trainer_dashboard"&&<Trainer_dashboard/> }
      
     
     {state==="Trainer_profile"&& <Trainer_profile trainerData={props.trainerData} />}
    </div>
  );
}
