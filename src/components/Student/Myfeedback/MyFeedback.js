import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import myfeedback from "./myfeedback.scss";

export default function StudentFeedback(){
  
  return(
    <form  className="feedback" noValidate autoComplete="off">
    <TextField id="outlined-basic" label="upload video link" variant="outlined" />
    <button className="createPlan">Create Plan</button>
  </form>
  )
}