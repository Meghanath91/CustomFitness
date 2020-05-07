import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";


export default function Feedback(props) {
  return (
    <div>
     
      <TrainerAppSideBar trainerData={props.trainerData} />

    <Typography
    style={{
      color: "black",
      textAlign: "center"
    }}
    component="h1"
    variant="h5"
  >
    Custom Plan Detail
  </Typography>
  </div>
   
  );
}
