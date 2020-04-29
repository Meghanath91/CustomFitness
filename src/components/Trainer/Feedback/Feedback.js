import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import "./myfeedback.scss";
// import VideoComponent from "./Video/VideoComponent";
import axios from "axios"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

export default function Feedback(props) {


  
  return (
    <div>
    <Typography
    style={{
      color: "black",
      textAlign: "center"
    }}
    component="h1"
    variant="h5"
  >
    Custom Plan Details
  </Typography>
  </div>
   
  );
}
